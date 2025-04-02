let input= [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];
let filtered=input.filter(ele=>{
    if(ele.tasksCompleted>5){
        return ele
    }
})
let output=filtered.map((ele)=>{
    return {
      name: ele.name,
      performance:
        ele.rating > 4.5
          ? "Excellent"
          : ele.rating >= 3
          ? "Good"
          : "Needs Improvement",
    };
}).sort((a,b)=>a.performance.localeCompare(b.performance))
console.log(output)
