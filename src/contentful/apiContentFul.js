import { client } from "./client";

export const getCards = async () => {

    try{
        return  client.getEntries({
            content_type: "productoOpemindTools",
            locale : "es-CO"
        }).then(res => res.items);
        
        //return entries;
    } catch(error){
        console.log(error);
    }
};


export const getCard = async (courseId) => {

    try{
        return  client.getEntries(Object.assign({
            content_type: 'modulosProductoOpenmindTools',
            locale : "es-CO"
        }, { 'fields.productoRelacionado.sys.id': courseId }))
        .then(res => res.items);
        
        //return entries;
    } catch(error){
        console.log(error);
    }
};