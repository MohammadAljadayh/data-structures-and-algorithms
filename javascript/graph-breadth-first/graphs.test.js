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
}

describe("GRAPH TESTS", () => {

    it("bradth first", () => {
        let expected="2,4,3,5"
        const myGraph = new Graph();
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const three = new Vertex(3);
        const four = new Vertex(4);
        const five = new Vertex(5);
    
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addVertex(three);
        myGraph.addVertex(four);
        myGraph.addVertex(five);
    
        myGraph.addDirectedEdge(zero, two);
        myGraph.addDirectedEdge(two, four);
        myGraph.addDirectedEdge(two, three);
        myGraph.addDirectedEdge(four, five);
    
        expect(myGraph.BreadthFirst(two)).toEqual(expected);
      });
    });
  