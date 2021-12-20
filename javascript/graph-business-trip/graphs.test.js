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
       
        businessTrip(graph, cityArray) {
        let totalCost = 0;
        let check = false;
      
        for (let i = 0; i < cityArray.length - 1; i++) {
          let neighbors = graph.getNeighbors(cityArray[i]);
          for (let j = 0; j <= neighbors.length - 1; j++) {
            if (cityArray[i + 1] === neighbors[j].vertex) {
              totalCost += neighbors[j].weight;
              check = true;
            }
          }
          if (check === false) {
            totalCost = 0;
            check = false;
            return `${check}, $${totalCost}`;
          }
        }
      
        return `${check}, $${totalCost}`;
      }
}

   
const graph = new Graph();

let Pandora = graph.addVertex('Pandora');
let Metroville = graph.addVertex('Metroville');
let Narnia = graph.addVertex('Narnia');
let Arendelle = graph.addVertex('Arendelle');
let Naboo = graph.addVertex('Naboo');
let Monstropolis = graph.addVertex('Monstropolis');

graph.addDirectedEdge(Pandora, Arendelle, 150);
graph.addDirectedEdge(Pandora, Metroville, 82);
graph.addDirectedEdge(Metroville, Arendelle, 99);
graph.addDirectedEdge(Narnia, Metroville, 37);
graph.addDirectedEdge(Metroville, Naboo, 26);
graph.addDirectedEdge(Narnia, Naboo, 250);
graph.addDirectedEdge(Metroville, Monstropolis, 105);
graph.addDirectedEdge(Monstropolis, Naboo, 73);
graph.addDirectedEdge( Arendelle,Monstropolis, 42);

const graph2 = new Graph();
const Herbalife = graph2.addVertex('Herbalife');

describe('Get Edge Test', () => {
  it('should return true and the weight if a path exists', () => {
    expect(graph. businessTrip(graph, [Arendelle, Monstropolis, Naboo])).toEqual('true, $0');
  });
  it('should retrun false if a path doesn\'t exist', () => {
    expect(graph. businessTrip(graph, [Naboo, Pandora])).toBe('false, $0');
    expect(graph. businessTrip(graph, [Narnia, Arendelle, Naboo])).toBe('false, $0');
  });
  it('should return false for invalid nodes', () => {
    expect(graph. businessTrip(graph, [Naboo, Herbalife])).toBe('false, $0');
  });
});