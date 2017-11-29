import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';

class RequestAccountForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        labelText="Name"
                        placeholderText="Enter your name"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        labelText="Email"
                        placeholderText="Enter your email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        labelText="Message"
                        placeholderText="Your message"
                        multiline
                        numberOfLines={4}
                    />
                </CardSection>
                <CardSection>
                    <Button>Submit</Button>
                </CardSection>
            </Card>
        );
    }
}

export default RequestAccountForm;
