import postImage1 from '../image/postPhoto1.png'
import postImage2 from '../image/postPhoto2.png'
import postImage3 from '../image/postPhoto3.png'
import photo1 from '../image/postNewsPhoto.png'
import photo2 from '../image/postNewsPhoto2.png'
import photo3 from '../image/postNewsPhoto3.png'

export const posts = [
    {
        id:1,
        nameCommunitie:'Йога',
        imageCommunitie:postImage1,
        communitiePosts:[
            {
                id:1,
                communitieImage:postImage1,
                name:'Йога',
                data:'20 мая в 2:41',
                newsDescription:'В это воскренье  в 14 00 присоединяйтесь к нам на мастер-класс по йоге.',
                newsImage: photo1,
                likes:25,
                comments:1
            },
            {
                id:2,
                communitieImage:postImage1,
                name:'Йога',
                data:'20 мая в 2:41',
                newsDescription:'fef',
                newsImage: photo1,
                likes:25,
                comments:1
            }
        ]
    },
    {
        id:2,
        nameCommunitie:'Стретчинг',
        imageCommunitie:postImage2,
        communitiePosts:[
            {
                id:2,
                communitieImage:postImage2,
                name:'Стретчинг',
                data:'20 мая в 2:41',
                newsDescription:'В эту пятницу  в 10 00 присоединяйтесь к нам на стретчинг.',
                newsImage: photo2,
                likes:25,
                comments:1
            }
        ]
    },
    {
        id:3,
        nameCommunitie:'Твин Пикс',
        imageCommunitie:postImage3,
        communitiePosts:[
            {
                id:3,
                communitieImage:postImage3,
                name:'Твин Пикс ',
                data:'20 мая в 2:41',
                newsDescription:'Сегодня в 21 00 состоится просмотр нового фильма Тарантино .Ждем вас!',
                newsImage: photo3,
                likes:25,
                comments:1
            }
        ]
    },
]