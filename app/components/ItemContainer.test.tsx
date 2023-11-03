import React from 'react';

import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ItemContainer from "./ItemContainer";
import { ItemContainerProps } from '../types/ItemContainerProps';

const item: ItemContainerProps = {
    displayImage: "/home/sample_1.jpeg",
    hoverImage: "/home/sample_1_d.jpeg",
    description: "Arket - Collared Tweed Top, 100% organic",
    price: "300 kr"
}
const dataItems: Array<ItemContainerProps> = [];

describe('ItemContainer', () => {
    beforeAll(() => {
        // populate data via API
    })
    it('renders without crashing', () => {
        render(<ItemContainer itemContainer={item}/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders buy button with correct text', () => {
        render(<ItemContainer itemContainer={item}/>);
        const button = screen.getByText('Buy');
        expect(button).toBeInTheDocument();
    });

    it('render offer button with correc text', () => {
        render(<ItemContainer itemContainer={item}/>);
        const button = screen.getByText('Offer');
        expect(button).toBeInTheDocument();
    });

    /*it('switches images when hovered', () => {
        render(<ItemContainer itemContainer={item}/>);
        const img = screen.getByRole('img') as HTMLImageElement;
        expect(img.src).toContain(item.displayImage);

        userEvent.hover(img);
        expect(img.src).toContain(item.hoverImage);
        
        userEvent.unhover(img);
        expect(img.src).toContain(item.displayImage);
    })*/

});