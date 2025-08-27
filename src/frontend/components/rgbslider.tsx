import React, { Component } from 'react';
import SingleSlider from './singleslider';

type State = {
    red: number;
    green: number;
    blue: number;
};

export default class RGBSlider extends Component<{}, State> {
    // aktueller wäre useState
    constructor(props: {}) {
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        }
    }

    render() {
        const {red, green, blue} = this.state;
        return (
            <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                    {/* eigenen component vernwenden */}
                    <SingleSlider colorname="red" value={red} minimum={0} maximum={255} onChange={(v) => this.setState({ red: v })} />
                    <SingleSlider colorname="green" value={green} minimum={0} maximum={255} onChange={(v) => this.setState({ green: v })} />
                    <SingleSlider colorname="blue" value={blue} minimum={0} maximum={255} onChange={(v) => this.setState({ blue: v })} />
                </div>
                <div 
                    className="w-[200px] h-[200px] bg-white rounded-md"
                    // direkt Zahlenwerte übergeben in die hintergrundfarbe
                    style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
                >

                </div>
            </div>
        )
    }
}