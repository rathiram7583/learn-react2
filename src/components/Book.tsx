import * as React from 'react';

export interface IBookProps{
     bName:string;
     bTitle:string;
     callMethod:(callString:string) =>string;
}
export default class Book extends React.Component<IBookProps> {

    render()
    {
        let {bName,bTitle,callMethod} =this.props;
        return(
        <dl>
            <dt>Book Name:</dt>
            <dd>{bName}</dd>
            <dt>Book Title:</dt>
            <dd>{bTitle}</dd>
            <dt>The Edition of this Book is</dt>
            <dd>{callMethod("Second Edition")}</dd>
        </dl>

        );

    }
}