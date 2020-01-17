import React, { Component } from 'react';
import ColllectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

export default class CollectionPreview extends Component {
    render() {
        const { title, items } = this.props;
        return (
            <div className='collection-preview'>
                <h1 className='title'>{title}</h1>
                <div className="preview">
                    {
                        items
                            .filter((item, idx) => idx < 4)
                            .map(({ id, ...otherItemsProps }) => (
                                <ColllectionItem key={id} {...otherItemsProps} />
                            ))
                    }
                </div>
            </div>
        )
    }
}
