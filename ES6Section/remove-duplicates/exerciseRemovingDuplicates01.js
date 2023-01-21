// given the next data structure remove the duplicate tweets from any user:
const tweets = [
  {tweet:{id: "101",author:{id:"1",name:"Michael"}},},
  {tweet:{id: "102",author:{id:"2",name:"Benny"}},},
  {tweet:{id: "103",author:{id:"2",name:"Benny"}},},
  {tweet:{id: "104",author:{id:"1",name:"Michael"}},},
  {tweet:{id: "105",author:{id:"3",name:"Eden Grasard"}},}
];

// way 01 with reduce + find
const removeDuplicatesReducing = tweets.reduce( (accumulator,current) => {
  if(!accumulator.find( item => item.tweet.author.id === current.tweet.author.id)){
    accumulator.push(current)
  }
  return accumulator
},[])

console.log(removeDuplicatesReducing)

// way 02 with filter + findIndex
const removeDuplicatesFiltering = tweets.filter( (t,index,self) => {
  return index === self.findIndex( value => value.tweet.author.id === t.tweet.author.id)
})

console.log(removeDuplicatesFiltering)
