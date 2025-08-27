import React, { Component } from 'react';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

type SingleSliderProps = {
    colorname: 'red' | 'green' | 'blue';
    value: number;
    minimum: number;
    maximum: number;
    onChange: (value: number) => void;
};

export default class SingleSlider extends Component<SingleSliderProps> {
    render() {
        // destrukturierung wäre auch möglich direkt als object destructuring in the function parameters
        // bspw. export default function SingleSlider ({ colorname, ... }: SingleSliderProps) {...}
        const { colorname, value, minimum, maximum, onChange } = this.props;
        // um an R/G/B zu kommen
        const label = colorname.toUpperCase().charAt(0);
        return (
            <div className="flex flex-row w-md gap-5 py-3">
                <p>{label}</p>
                <Slider min={minimum} max={maximum} value={value} onChange={(val) => onChange(val as number)} />
                <p className='border rounded-md border-2 px-2 w-[6ch] text-center font-mono tabular-nums'>{value}</p>
            </div>
        );
    }
}


