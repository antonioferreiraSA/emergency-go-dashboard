import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'Layouts';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Input = styled(InputGroup)`
  margin-bottom: 22px;
`;

const InputPage = () => {
  const [checkbox, setCheckbox] = useState({
    1: false,
    2: false,
    3: false,
  });

  const onChangeCheckbox = (value: boolean, name: number) => {
    setCheckbox({ ...checkbox, [name]: value });
  };
  const onChangeRadio = (_value: any) => {
    // value will be item value
  };
  return (
    <Layout title="Input">
      <Row>
        <Col breakPoint={{ xs: 8, sm: 6, md: 8, lg: 12 }}>
          <Card>
            <header>Add Driver</header>
            <CardBody>
              <Row>
                <Col breakPoint={{ xs: 12, md: 4 }}>
                  <label>Driver Full Name:</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Size Medium" />
                  </Input>
                  <label>Email</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Size Medium" />
                  </Input>
                  <label>Password</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Size Medium" />
                  </Input>
                  <label>Confirm Password:</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Size Medium" />
                  </Input>
                  <label>Contact Number:</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Size Medium" />
                  </Input>
                </Col>
              </Row>
              <label>Gender</label>

              <Col breakPoint={{ xs: 12, sm: 4 }}>
                <Checkbox checked={checkbox[2]} status="Danger" onChange={(value) => onChangeCheckbox(value, 2)}>
                  Male
                </Checkbox>
              </Col>
              <Col breakPoint={{ xs: 12, sm: 4 }}>
                <Checkbox checked={checkbox[3]} status="Warning" onChange={(value) => onChangeCheckbox(value, 3)}>
                  Female
                </Checkbox>
              </Col>

              <Row>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Input fullWidth>
                    <input type="text" disabled />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Input fullWidth>
                    <input type="text" disabled placeholder="Disabled Input" />
                  </Input>
                </Col>
              </Row>
              <Select fullWidth placeholder="Select" options={options} />
              <Input fullWidth shape="Round">
                <textarea rows={5} placeholder="Text Area" />
              </Input>
            </CardBody>
          </Card>

          <Card>
            <header>Add Driver Vehicle Type Details</header>
            <CardBody>
              <Row>
                <Col breakPoint={{ xs: 12, md: 4 }}>
                  <label>Driver Full Name:</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Driver Full Name" />
                  </Input>
                  <label>Email</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Email" />
                  </Input>
                  <label>Password</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Password" />
                  </Input>
                  <label>Confirm Password:</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Confirm Password" />
                  </Input>
                  <label>Contact Number:</label>
                  <Input fullWidth size="Medium">
                    <input type="text" placeholder="Contact Number" />
                  </Input>
                </Col>
              </Row>
              <label>Gender</label>

              <Col breakPoint={{ xs: 12, sm: 4 }}>
                <Checkbox checked={checkbox[2]} status="Danger" onChange={(value) => onChangeCheckbox(value, 2)}>
                  Male
                </Checkbox>
              </Col>
              <Col breakPoint={{ xs: 12, sm: 4 }}>
                <Checkbox checked={checkbox[3]} status="Warning" onChange={(value) => onChangeCheckbox(value, 3)}>
                  Female
                </Checkbox>
              </Col>

              <Row>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Input fullWidth>
                    <input type="text" disabled />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Input fullWidth>
                    <input type="text" disabled placeholder="Disabled Input" />
                  </Input>
                </Col>
              </Row>
              <Select fullWidth placeholder="Select" options={options} />
              <Input fullWidth shape="Round">
                <textarea rows={5} placeholder="Text Area" />
              </Input>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default InputPage;
