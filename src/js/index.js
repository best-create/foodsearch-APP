import Search from './model/search';



const state={};

const controlSearch=async()=>{
    //1.get query from view
    const query='pizza'

    if(query){
        //2 new search object and add to state
        state.search=new Search(query);

        //3 prepare UI for result

        //4 search for recipe
       await state.search.getResults();

        //5 render results on UI
        console.log(state.search.result);

    }
}
//add event listener 

document.querySelector('.search').addEventListener('submit',e=>{
    e.preventDefault();
    controlSearch();
})


