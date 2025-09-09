export function getNodesInShortestPathOrder(endNode){
     const nodesInShortestPathOrder = [];
  let currentNode = endNode;
  while(currentNode!=null){
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode=currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
export function dijkstra(grid,startNode,endNode){
    const visitedNodesInOrder=[];
    startNode.distance=0;
    const unvisitedNodes=getAllNodes(grid);

while(unvisitedNodes.length){
    unvisitedNodes.sort((a,b)=>a.distance-b.distance);
    const closestNode=unvisitedNodes.shift();
    // shift() removes and returns the first node in the array → the one with the smallest distance.
    if(closestNode.isWall) continue;
    if(closestNode.distance==Infinity) return visitedNodesInOrder;
    closestNode.visited=true;
    visitedNodesInOrder.push(closestNode);
    if(closestNode==endNode) return visitedNodesInOrder;
     updateUnvisitedNeighbors(closestNode, grid);

}
}
function updateUnvisitedNeighbors(node,grid){
    const neighbors=getUnvisitedNeighbors(node,grid);
    for(const neighbor of neighbors){
neighbor.distance=node.distance+1;
neighbor.previousNode=node;
    }
}
function getUnvisitedNeighbors(node,grid){
    const neighbors=[];
    const {row,col}=node;
    if(row>0) neighbors.push(grid[row-1][col]);
      if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.visited);
}
function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}