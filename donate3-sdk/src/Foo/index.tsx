import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => (
  <h4>
    {props.title}
    {'000000ufo foo----'}
  </h4>
);

export default Foo;
