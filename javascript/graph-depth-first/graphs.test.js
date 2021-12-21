'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }
    addVertex(vertex) {
        // we need to add the vertex to the adjacency list and set an empty array for the edges
        this._adjacencyList.set(vertex, []);
        return vertex;
    }
    addDirectedEdge(startVertex, endVertex) {
        if (
            !this._adjacencyList.has(startVertex) ||
            !this._adjacencyList.has(endVertex)
        ) {
            return "Invalid vertex";
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex));
    }
    printAll() {
        let str = "";
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            let edg;
            if (edge[0]) {
                edg = "";
                for (let i = 0; i < edge.length; i++) {
                    edg += `${edge[i].vertex.value},`;
                }
            } else {
                edg = edge;
            }
            str = str + ` Vertex ${vertex["value"]} => edge ${edg} ||`;
        }
        return str;
    }

    getNeighbors(node) {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            if (vertex === node) {
                return edge;
            }
        }
    }

    getGraphByNode(node) {
        if (this._adjacencyList.has(node)) {
            return this.printAll();
        }
    }

    size() {
        if (this._adjacencyList.size > 0) {
            return this._adjacencyList.size;
        } else {
            return null;
        }
    }

    BreadthFirst(node){
        const queue=[];
        const visited=[];
        
     
        queue.unshift(node);
        visited.push(node);
        while (queue.length) {
          const current=queue.pop();
          const neighbors=this.getNeighbors(current);
          for (const neighbor of neighbors) {
            const vertex=neighbor.vertex;
            if(visited.includes(vertex)){
              continue;
            }else{
              visited.push(vertex);
              queue.unshift(vertex);
            }
          }
        }
        let result=visited.map(el=>{
          return el.value
        })
        return result.toString();
       }

       depthFirst(node){
        const visitedNode=new Set();
        visitedNode.add(node);
    
        const travers=(current,visited)=>{
          visitedNode.add(current);
          const neighbors=this.getNeighbors(current);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
              travers(neighbor.vertex,visited);
            }
          }
        }
        travers(node,visitedNode);
        let result='';
        for (const iterator of visitedNode) {
          result+=iterator.value+",";
        }
        return result;
      }
}

describe("Graph", () => {
    it("Depth First", () => {
      let graphs = new Graph();
  
      let one = new Vertex("A");
      let two = new Vertex("B");
      let three = new Vertex("C");
      let four = new Vertex("D");
      let five = new Vertex("E");
      let six = new Vertex("F");
      let seven = new Vertex("G");
      let eight = new Vertex("H");
  
      graphs.addVertex(one);
      graphs.addVertex(two);
      graphs.addVertex(three);
      graphs.addVertex(four);
      graphs.addVertex(five);
      graphs.addVertex(six);
      graphs.addVertex(seven);
      graphs.addVertex(eight);
  
      graphs.addDirectedEdge(one, two);
      graphs.addDirectedEdge(one, four);
      graphs.addDirectedEdge(two, four);
      graphs.addDirectedEdge(two, three);
      graphs.addDirectedEdge(two, seven);
      graphs.addDirectedEdge(four, five);
      graphs.addDirectedEdge(four, six);
      graphs.addDirectedEdge(four, eight);
      graphs.addDirectedEdge(six, eight);
      expect(graphs.depthFirst(one)).toEqual("A,B,D,E,F,H,C,G,");
    });
  });
  