import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observable, makeObservable } from 'mobx';

export const TestCounter = observer(class extends Component {
    count = 0;

    constructor(props) {
        super(props);
        makeObservable(this, {
            count: observable,
            dec: action,
            inc: action.bound,
        });
        this.count = this.props.initialCount ?? 0;
    }
    render() {
        return (
            <div>
                <button onClick={this.dec}>-</button>
                <span>{this.count}</span>
                <button onClick={this.inc}>+</button>
            </div>
        );
    }

    dec = () => this.count--;

    inc() {
        this.count ++;
    }
})
