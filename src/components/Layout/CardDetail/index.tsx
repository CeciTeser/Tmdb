import { FC } from "react";

import { useHistory } from "react-router-dom";

import { StarRating } from "../..";

import { useVideos } from "../../../hooks";

import { Item } from "../../../types";



import './styles.scss';


type Props={
    items:Item[],
}


const CardDetail :FC<Props> = ({items}) =>{

    const {goBack} = useHistory()

    const {push} = useHistory()

    const {data, videoList } = useVideos()

    const imageBroken = (!data.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${data.poster_path}`

    

    return(

        <div className="container">
            <section className="card mb-5"> 
                <div className="row">
                    <div className="col-md-4">
                        <img src ={imageBroken}  className="img-fluid rounded-start" alt={data.title}></img>
                    </div>  
                    <div className="col-md-8 d-flex">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{data.title}</strong></h5>
                            <p className="card-text">{data.original_title}</p>
                            <div className='vote'>{data.vote_average}</div>
                            <StarRating stars={data.vote_average} />
                            <p className="card-text">{data.overview}</p>
                            <p className="card-text"> <strong>Release date:</strong> {data.release_date}</p>
                            <p className="card-text"> <strong>Original language:</strong> {data.original_language}</p>
                            <section  className="pt-5 row">
                                <h3>Trailers</h3>
                                {videoList.data?.map((video) => {

                                    return (
                                        <div className='col-md-6 mb-3'>
                                            <iframe
                                            title={video.name}
                                            width="300"
                                            height="200"
                                            src={`https://www.youtube.com/embed/${video.key}`}
                                            allowFullScreen
                                            >
                                            </iframe>
                                        </div>
                                    );
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <button className="goback-btn my-5" onClick={goBack}> <i className="fas fa-chevron-left pe-2"></i>GO BACK</button>

            <h2 className="my-4">ALSO...</h2>
            <section className="row" >
                    {items?.map((item) => {
                        return (
                            <div className="col-md-3 mb-5">
                                <div className="card each-card" key={item.id}  onClick={() => push(`/detail/${item.id}`)}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img src ={ `http://image.tmdb.org/t/p/w500${item.poster_path}`}  className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </section> 

        </div>  
    )
};

export {CardDetail}