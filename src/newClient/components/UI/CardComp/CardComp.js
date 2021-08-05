import React, { useState, useEffect } from 'react';
import { Card, Radio, Tooltip } from 'antd';


const CardComp = (props) => {
	const [value, setValue] = useState(null);

	const onChange = (e) => {
		setValue(e.target.value);
		props.updateRadioSelection(e.target.value, props.PackageNumber);
	};

	useEffect(() => {
		if (props.defaultValue) {
			setValue(props.defaultValue.id);
		} else {
			setValue(null);
		}
	}, []);

	// const resetSelection = () => {
	// 	props.resetRadioSelection(props.PackageNumber);
	// 	setValue(null);
	// };

	return (
		<Card data-test="component-card"

			style={{ width: 300 }}
		>
			<Radio.Group onChange={onChange} value={value} defaultValue={props.defaultValue ? props.defaultValue.id : value}>
				{createCheckBox()}
			</Radio.Group>
		</Card>
	);
};
export default React.memo(CardComp);
