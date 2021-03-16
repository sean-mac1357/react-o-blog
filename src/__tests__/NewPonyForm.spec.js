import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewPonyForm from '../components/NewPonyForm';

describe('<NewPonyForm />', () => {
    let getByTestId;
    
    describe('clicking the send button', () => {
        let sendHandler;
        beforeEach(async () => {
            sendHandler = jest.fn().mockName('sendHandler');
            ({ getByTestId } = render(<NewPonyForm onSend={sendHandler} />));

            await userEvent.type(
                getByTestId('ponyName'),
                'New pony',
            );
            userEvent.click(getByTestId('sendButton'));
        });

        it('clears the text field', () => {
            expect(getByTestId('ponyName').value).toEqual('')
        });

        it('calls the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New pony');
        });
    });
});