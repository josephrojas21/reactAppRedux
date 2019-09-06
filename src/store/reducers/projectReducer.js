const initState = {
   projects:[
       {id:'1', title: 'help me finf', content: 'blah blah blah'},
       {id:'2', title: 'helpewewewewew  rtgrt f', content: 'blah blah blah'},
       {id:'3', title: 'help trtr rtr rtrtrt me finf', content: 'blah blah blah'}

   ] 
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project error', action.err);
            return state;
         default:
            return state;
    }
}

export default projectReducer;