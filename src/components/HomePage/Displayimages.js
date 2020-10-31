import React from 'react';
import axios from 'axios';
import {IoLogoInstagram} from 'react-icons/io';
import '../../css/Displayimages.css';

//Raymond Token
//const access_token = 'IGQVJYNC13aEVyTkxEcGptWngyX3pTYlVwbnhTMnc5aDNpUHpjdkRweGt6VmFjMmtGRVdWbkIza2RVNkJWdXRNdUx4Sm80cGtDY2t5YnVleWZA1Y1psLWxjUF9iLUlmalktZAFRZAcS1uTUFnWlJUTy1obwZDZD'

//GoldnHour
const access_token = 'IGQVJWS0R1czhXcHZADVHJDLVk2TEVBanVBLUpTWTVtMVBQMzR4eWJ1ekw2TThST1lHU000Y1VMZAml5UmhUbGNPS3JGMXlteXVJNmI3bDN1cV9CaEVodExjOFcyMHpYZAWl0U3RlQ2VEWkFzMDkwVlpOdQZDZD'

class DisplayImages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            userid: '',
            imageid: [],
            imgsrc: [],
            active1: false,
            active2: false,
            active3: false,
        }
    }
    async componentDidMount() {
        axios.get('https://graph.instagram.com/me?fields=id,username&access_token=' + access_token)
        .then((res) => {
            this.setState({
                username: res.data.username,
                userid: res.data.id
            })
        })
        .catch((err) => {
            console.log(err);
        })

        axios.get('https://graph.instagram.com/me/media?fields=media_url,caption&access_token=' + access_token + '&count=8')
        .then((res) => {
            let temp = [];
            console.log(res);
            for (var i = 0; i < res.data.data.length; ++i) {
                if (i >= 8) {
                    break;
                }

                /* this.setState((state) => {
                    const imageid = state.imageid.concat(res.data.data[i]);
                    return {imageid};
                }) */
                temp.push(res.data.data[i]);
            }
            this.setState({
                imgsrc: temp
            })
            console.log(this.state.imgsrc);
/*             let tempArr = [];
            for (let i = 0; i < this.state.imageid.length; ++i) {
                axios.get('https://graph.instagram.com/' + this.state.imageid[i].id + '?fields=id,media_type,media_url,username,timestamp&access_token=' + access_token)
                .then((res) => {
                    this.setState({
                        imgsrc: res.data.media_url
                    })
                })
            }
            
            console.log(this.state.imgsrc); */
//            console.log(this.state.imgsrc[0]);
/*             axios.get('https://graph.instagram.com/' + this.state.imageid[0].id + '?fields=id,media_type,media_url,username,timestamp&access_token=' + access_token)
            .then((res) => {
                this.setState({
                    imgsrc: res.data.media_url,
                })
                console.log(res);
            })
            console.log(this.state.imgsrc); */
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return(
            <div className="display-images">
                <p className="title"><IoLogoInstagram style={{height: '35px', width: '30px', paddingBottom: '5px'}} /> GOLDNHOUR.CA</p>
                <div className="row-1">
                    {//<img src={this.state.imgsrc} style={{height: '330px', width: '25%'}} />}
                    }
                    {this.state.imgsrc.map((url) => {
                        if (url.media_url[8] == 'v') {
                            return (
                                <div className="home-image">              
                                    <video autoPlay muted loop style={{width: '100%', height: '100%'}}>
                                        <source src={url.media_url} type="video/mp4"/>
                                    </video>
                                </div>
                            )
                        }

                        return (
                            <div className="home-image">
                                <img src={url.media_url} className="ig-image" />
                            </div>
                        )
                        
                    })}

                </div>
            </div>
        )
    }

}

export default DisplayImages;
