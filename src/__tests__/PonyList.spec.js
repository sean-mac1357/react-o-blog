import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PonyList from '../components/PonyList';
import { BrowserRouter as Router } from 'react-router-dom'

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders pony data", async () => {
    const fakePony = [{
        id: 2,
        name: "Fancy Pants",
        slug: "fancy_pants",
        attribute: "has fancy pants",
        url: "https://static.wikia.nocookie.net/fancypants/images/c/cc/Fancy_pants_man.jpg/revision/latest/scale-to-width-down/340?cb=20120429212526"
    }];
    jest.spyOn(global, "fetch").mockImplementation(() => 
        Promise.resolve({
            json: () => Promise.resolve(fakePony)
        })
    );
    
    await act(async () => {
        render(
        <Router>
            <PonyList />
        </Router>, container);
    });

expect(container.textContent).toContain(fakePony[0].name);
global.fetch.mockRestore();
})