import { v4 as uuidv4 } from 'uuid';

export default () => ({
    isLoading: true,
    entries: [
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Minim exercitation ad nulla occaecat eiusmod qui enim amet voluptate incididunt esse. Consequat aute cillum laborum in. Est ullamco cillum aute do consequat culpa do non est consequat anim aliqua. Proident nostrud aute sit nisi velit. Tempor officia mollit quis eu aute deserunt laborum est ullamco minim. Do consectetur irure eu dolore reprehenderit dolor qui fugiat aliquip enim qui duis nisi sit. Aliqua velit non nostrud reprehenderit aliquip exercitation anim tempor sint irure aliquip.',
            picture: null,
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Voluptate culpa sit ea nisi labore amet fugiat cupidatat duis culpa ex adipisicing enim quis. Ea aliquip laboris Lorem do irure amet qui fugiat. Officia laboris consectetur sint mollit est est aute mollit ut labore quis id do.',
            picture: null,
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            text: 'Fugiat consequat consectetur deserunt esse labore proident sit cupidatat nisi commodo eiusmod occaecat occaecat. Aute dolore voluptate ut id reprehenderit cupidatat cillum. Duis nisi magna est fugiat ut eu. Veniam consectetur in nulla officia eiusmod qui ad pariatur culpa eiusmod duis sint Lorem sit. Sunt proident veniam culpa labore sit enim ad ad.',
            picture: null,
        },
    ]
})