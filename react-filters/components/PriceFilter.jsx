/** @jsx React.DOM */
'use strict'
var React = require('react')
var PriceSelectItem = require('./PriceSelectItem')

module.exports = React.createClass({
	displayName: 'PriceFIlter',
	render: function() {
		return (
			<ul>
				<PriceSelectItem />
			</ul>
		);
	}

});