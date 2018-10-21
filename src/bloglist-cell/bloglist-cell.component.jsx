import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

class BlogListCell extends Component {

    htmlString(str) {
        return ReactHtmlParser(str);
    }

    render() {
        const { id, title, description, tag, category, claps, created_at, updated_at } = this.props;
        return (
            
            <div class="container">

            <div class="col-md-12 mt-3 white-bg border-radius-10 box-shadow">
            <div class="row">
                <div class="col-md-1 col-2 like-position">
                <i class="fa fa-heart heart-deeppink fa-2x ml-3" aria-hidden="true"></i>
                </div>
                <div class="col-md-11 col-10">
                    <div class="col-md-12">
                        <div class="row mt-1">
                            <div class="col-md-8 col-0"></div>
                            <div class="col-md-2 col-6 t-align-right">
                                <span class="badge badge-pill badge-primary">General</span>
                            </div>
                            <div class="col-md-2 col-6 t-align-left">
                                <span class="badge badge-pill badge-warning">Sangam</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>தமிழ்ச் சங்கம்</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 gray">
                                சங்கம் என்பது ஒரு குறிப்பிட்ட குறிக்கோளுக்காக, ஒருமித்த கருத்துடன் செயல்படும் ஒரு
                                கூட்டமைப்பு என்று தமிழ் கூறும். தமிழ் வளர்ப்பதை தன் உயிரினும் மேலான குறிக்கோளாகக் கொண்ட
                                ஒரு கூட்டமைப்பே தமிழ்ச் சங்கம் ஆகும்.
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-7"></div>
                            <div class="col-md-2 col-5 date-labels mb-1">
                            <i class="fa fa-clock-o" aria-hidden="true"></i> Oct 21,2018</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>


        );
    }
}

export default BlogListCell;
