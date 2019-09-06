export const createProject = (project) =>{
    return(dispatch, getState, {getFirebase , getFirestore}) =>{
        //hace una llamada asincrona a la base de datos
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'net',
            authorLastName: 'rojas',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) =>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
        
    }
}