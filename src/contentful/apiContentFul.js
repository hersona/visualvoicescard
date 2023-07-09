import { client } from "./client";

export const getCards = async () => {

    try{
        const responseProductosOpenmindTools = await client.getEntries({
            content_type: "productoOpemindTools",
            locale : "es-CO"
        }).then(res => res.items);
        
        const responseProducto = await client.getEntries({
            content_type: "producto",
            locale : "es-CO"
        }).then(res => res.items);

        const combinedData = [...responseProductosOpenmindTools, ...responseProducto];

        return combinedData;
    } catch(error){
        console.log(error);
    }
};

export const getCard = async (courseId) => {

    try{
        return  client.getEntries(Object.assign({
            content_type: 'moduloProducto',
            locale : "es-CO"
        }, { 'fields.productoRelacionado.sys.id': courseId }))
        .then(res => res.items);
        
        //return entries;
    } catch(error){
        console.log(error);
    }
};