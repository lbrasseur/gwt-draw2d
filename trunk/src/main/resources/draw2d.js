/**
 * This notice must be untouched at all times. This is the COMPRESSED version of
 * the Draw2D Library WebSite: http://www.draw2d.org Copyright: 2006 Andreas
 * Herz. All rights reserved. Created: 5.11.2006 by Andreas Herz (Web:
 * http://www.freegroup.de ) LICENSE: LGPL
 */
var draw2d = new Object();
var _errorStack_ = [];
function pushErrorStack(e, _208e) {
	_errorStack_.push(_208e + "\n");
	throw e;
}
draw2d.AbstractEvent = function() {
	this.type = null;
	this.target = null;
	this.relatedTarget = null;
	this.cancelable = false;
	this.timeStamp = null;
	this.returnValue = true;
};
draw2d.AbstractEvent.prototype.initEvent = function(sType, _2090) {
	this.type = sType;
	this.cancelable = _2090;
	this.timeStamp = (new Date()).getTime();
};
draw2d.AbstractEvent.prototype.preventDefault = function() {
	if (this.cancelable) {
		this.returnValue = false;
	}
};
draw2d.AbstractEvent.fireDOMEvent = function(_2091, _2092) {
	if (document.createEvent) {
		var evt = document.createEvent("Events");
		evt.initEvent(_2091, true, true);
		_2092.dispatchEvent(evt);
	} else {
		if (document.createEventObject) {
			var evt = document.createEventObject();
			_2092.fireEvent("on" + _2091, evt);
		}
	}
};
draw2d.EventTarget = function() {
	this.eventhandlers = {};
};
draw2d.EventTarget.prototype.addEventListener = function(sType, _2095) {
	if (typeof this.eventhandlers[sType] == "undefined") {
		this.eventhandlers[sType] = [];
	}
	this.eventhandlers[sType][this.eventhandlers[sType].length] = _2095;
};
draw2d.EventTarget.prototype.dispatchEvent = function(_2096) {
	_2096.target = this;
	if (typeof this.eventhandlers[_2096.type] != "undefined") {
		for ( var i = 0; i < this.eventhandlers[_2096.type].length; i++) {
			this.eventhandlers[_2096.type][i](_2096);
		}
	}
	return _2096.returnValue;
};
draw2d.EventTarget.prototype.removeEventListener = function(sType, _2099) {
	if (typeof this.eventhandlers[sType] != "undefined") {
		var _209a = [];
		for ( var i = 0; i < this.eventhandlers[sType].length; i++) {
			if (this.eventhandlers[sType][i] != _2099) {
				_209a[_209a.length] = this.eventhandlers[sType][i];
			}
		}
		this.eventhandlers[sType] = _209a;
	}
};
String.prototype.trim = function() {
	return (this.replace(new RegExp("^([\\s]+)|([\\s]+)$", "gm"), ""));
};
String.prototype.lefttrim = function() {
	return (this.replace(new RegExp("^[\\s]+", "gm"), ""));
};
String.prototype.righttrim = function() {
	return (this.replace(new RegExp("[\\s]+$", "gm"), ""));
};
String.prototype.between = function(left, right, _15af) {
	if (!_15af) {
		_15af = 0;
	}
	var li = this.indexOf(left, _15af);
	if (li == -1) {
		return null;
	}
	var ri = this.indexOf(right, li);
	if (ri == -1) {
		return null;
	}
	return this.substring(li + left.length, ri);
};
draw2d.UUID = function() {
};
draw2d.UUID.prototype.type = "draw2d.UUID";
draw2d.UUID.create = function() {
	var _20aa = function() {
		return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
	};
	return (_20aa() + _20aa() + "-" + _20aa() + "-" + _20aa() + "-" + _20aa()
			+ "-" + _20aa() + _20aa() + _20aa());
};
draw2d.ArrayList = function() {
	this.increment = 10;
	this.size = 0;
	this.data = new Array(this.increment);
};
draw2d.ArrayList.EMPTY_LIST = new draw2d.ArrayList();
draw2d.ArrayList.prototype.type = "draw2d.ArrayList";
draw2d.ArrayList.prototype.reverse = function() {
	var _282b = new Array(this.size);
	for ( var i = 0; i < this.size; i++) {
		_282b[i] = this.data[this.size - i - 1];
	}
	this.data = _282b;
};
draw2d.ArrayList.prototype.getCapacity = function() {
	return this.data.length;
};
draw2d.ArrayList.prototype.getSize = function() {
	return this.size;
};
draw2d.ArrayList.prototype.isEmpty = function() {
	return this.getSize() === 0;
};
draw2d.ArrayList.prototype.getLastElement = function() {
	if (this.data[this.getSize() - 1] !== null) {
		return this.data[this.getSize() - 1];
	}
};
draw2d.ArrayList.prototype.asArray = function() {
	this.trimToSize();
	return this.data;
};
draw2d.ArrayList.prototype.getFirstElement = function() {
	if (this.data[0] !== null && this.data[0] !== undefined) {
		return this.data[0];
	}
	return null;
};
draw2d.ArrayList.prototype.get = function(i) {
	return this.data[i];
};
draw2d.ArrayList.prototype.add = function(obj) {
	if (this.getSize() == this.data.length) {
		this.resize();
	}
	this.data[this.size++] = obj;
};
draw2d.ArrayList.prototype.addAll = function(obj) {
	for ( var i = 0; i < obj.getSize(); i++) {
		this.add(obj.get(i));
	}
};
draw2d.ArrayList.prototype.remove = function(obj) {
	var index = this.indexOf(obj);
	if (index >= 0) {
		return this.removeElementAt(index);
	}
	return null;
};
draw2d.ArrayList.prototype.insertElementAt = function(obj, index) {
	if (this.size == this.capacity) {
		this.resize();
	}
	for ( var i = this.getSize(); i > index; i--) {
		this.data[i] = this.data[i - 1];
	}
	this.data[index] = obj;
	this.size++;
};
draw2d.ArrayList.prototype.removeElementAt = function(index) {
	var _2837 = this.data[index];
	for ( var i = index; i < (this.getSize() - 1); i++) {
		this.data[i] = this.data[i + 1];
	}
	this.data[this.getSize() - 1] = null;
	this.size--;
	return _2837;
};
draw2d.ArrayList.prototype.removeAllElements = function() {
	this.size = 0;
	for ( var i = 0; i < this.data.length; i++) {
		this.data[i] = null;
	}
};
draw2d.ArrayList.prototype.indexOf = function(obj) {
	for ( var i = 0; i < this.getSize(); i++) {
		if (this.data[i] == obj) {
			return i;
		}
	}
	return -1;
};
draw2d.ArrayList.prototype.contains = function(obj) {
	for ( var i = 0; i < this.getSize(); i++) {
		if (this.data[i] == obj) {
			return true;
		}
	}
	return false;
};
draw2d.ArrayList.prototype.resize = function() {
	newData = new Array(this.data.length + this.increment);
	for ( var i = 0; i < this.data.length; i++) {
		newData[i] = this.data[i];
	}
	this.data = newData;
};
draw2d.ArrayList.prototype.trimToSize = function() {
	if (this.data.length == this.size) {
		return;
	}
	var temp = new Array(this.getSize());
	for ( var i = 0; i < this.getSize(); i++) {
		temp[i] = this.data[i];
	}
	this.size = temp.length;
	this.data = temp;
};
draw2d.ArrayList.prototype.sort = function(f) {
	var i, j;
	var _2843;
	var _2844;
	var _2845;
	var _2846;
	for (i = 1; i < this.getSize(); i++) {
		_2844 = this.data[i];
		_2843 = _2844[f];
		j = i - 1;
		_2845 = this.data[j];
		_2846 = _2845[f];
		while (j >= 0 && _2846 > _2843) {
			this.data[j + 1] = this.data[j];
			j--;
			if (j >= 0) {
				_2845 = this.data[j];
				_2846 = _2845[f];
			}
		}
		this.data[j + 1] = _2844;
	}
};
draw2d.ArrayList.prototype.clone = function() {
	var _2847 = new draw2d.ArrayList(this.size);
	for ( var i = 0; i < this.size; i++) {
		_2847.add(this.data[i]);
	}
	return _2847;
};
draw2d.ArrayList.prototype.overwriteElementAt = function(obj, index) {
	this.data[index] = obj;
};
draw2d.ArrayList.prototype.getPersistentAttributes = function() {
	return {
		data : this.data,
		increment : this.increment,
		size : this.getSize()
	};
};
function trace(_16ef) {
	var _16f0 = openwindow("about:blank", 700, 400);
	_16f0.document.writeln("<pre>" + _16ef + "</pre>");
}
function openwindow(url, width, _16f3) {
	var left = (screen.width - width) / 2;
	var top = (screen.height - _16f3) / 2;
	property = "left="
			+ left
			+ ", top="
			+ top
			+ ", toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,alwaysRaised,width="
			+ width + ",height=" + _16f3;
	return window.open(url, "_blank", property);
}
function dumpObject(obj) {
	trace("----------------------------------------------------------------------------");
	trace("- Object dump");
	trace("----------------------------------------------------------------------------");
	for ( var i in obj) {
		try {
			if (typeof obj[i] != "function") {
				trace(i + " --&gt; " + obj[i]);
			}
		} catch (e) {
		}
	}
	for ( var i in obj) {
		try {
			if (typeof obj[i] == "function") {
				trace(i + " --&gt; " + obj[i]);
			}
		} catch (e) {
		}
	}
	trace("----------------------------------------------------------------------------");
}
draw2d.Drag = function() {
};
draw2d.Drag.current = null;
draw2d.Drag.currentTarget = null;
draw2d.Drag.currentHover = null;
draw2d.Drag.currentCompartment = null;
draw2d.Drag.dragging = false;
draw2d.Drag.isDragging = function() {
	return this.dragging;
};
draw2d.Drag.setCurrent = function(_2bd2) {
	this.current = _2bd2;
	this.dragging = true;
};
draw2d.Drag.getCurrent = function() {
	return this.current;
};
draw2d.Drag.clearCurrent = function() {
	this.current = null;
	this.dragging = false;
	this.currentTarget = null;
};
draw2d.Draggable = function(_2bd3, _2bd4) {
	this.id = draw2d.UUID.create();
	this.node = null;
	draw2d.EventTarget.call(this);
	this.construct(_2bd3, _2bd4);
	this.diffX = 0;
	this.diffY = 0;
	this.targets = new draw2d.ArrayList();
};
draw2d.Draggable.prototype = new draw2d.EventTarget();
draw2d.Draggable.prototype.construct = function(_2bd5) {
	if (_2bd5 === null || _2bd5 === undefined) {
		return;
	}
	this.element = _2bd5;
	var oThis = this;
	var _2bd7 = function() {
		var _2bd8 = new draw2d.DragDropEvent();
		_2bd8.initDragDropEvent("dblclick", true);
		oThis.dispatchEvent(_2bd8);
		var _2bd9 = arguments[0] || window.event;
		_2bd9.cancelBubble = true;
		_2bd9.returnValue = false;
	};
	var _2bda = function() {
		var _2bdb = arguments[0] || window.event;
		var _2bdc = new draw2d.DragDropEvent();
		if (oThis.node !== null) {
			var _2bdd = oThis.node.getWorkflow().getAbsoluteX();
			var _2bde = oThis.node.getWorkflow().getAbsoluteY();
			var _2bdf = oThis.node.getWorkflow().getScrollLeft();
			var _2be0 = oThis.node.getWorkflow().getScrollTop();
			_2bdc.x = _2bdb.clientX - oThis.element.offsetLeft + _2bdf - _2bdd;
			_2bdc.y = _2bdb.clientY - oThis.element.offsetTop + _2be0 - _2bde;
		}
		if (_2bdb.button === 2) {
			_2bdc.initDragDropEvent("contextmenu", true);
			oThis.dispatchEvent(_2bdc);
		} else {
			_2bdc.initDragDropEvent("dragstart", true);
			if (oThis.dispatchEvent(_2bdc)) {
				oThis.diffX = _2bdb.clientX - oThis.element.offsetLeft;
				oThis.diffY = _2bdb.clientY - oThis.element.offsetTop;
				draw2d.Drag.setCurrent(oThis);
				if (oThis.isAttached == true) {
					oThis.detachEventHandlers();
				}
				oThis.attachEventHandlers();
			}
		}
		_2bdb.cancelBubble = true;
		_2bdb.returnValue = false;
	};
	var _2be1 = function() {
		if (draw2d.Drag.getCurrent() === null) {
			var _2be2 = arguments[0] || window.event;
			if (draw2d.Drag.currentHover !== null
					&& oThis !== draw2d.Drag.currentHover) {
				var _2be3 = new draw2d.DragDropEvent();
				_2be3.initDragDropEvent("mouseleave", false, oThis);
				draw2d.Drag.currentHover.dispatchEvent(_2be3);
			}
			if (oThis !== null && oThis !== draw2d.Drag.currentHover) {
				var _2be3 = new draw2d.DragDropEvent();
				_2be3.initDragDropEvent("mouseenter", false, oThis);
				oThis.dispatchEvent(_2be3);
			}
			draw2d.Drag.currentHover = oThis;
		} else {
		}
	};
	if (this.element.addEventListener) {
		this.element.addEventListener("mousemove", _2be1, false);
		this.element.addEventListener("mousedown", _2bda, false);
		this.element.addEventListener("dblclick", _2bd7, false);
	} else {
		if (this.element.attachEvent) {
			this.element.attachEvent("onmousemove", _2be1);
			this.element.attachEvent("onmousedown", _2bda);
			this.element.attachEvent("ondblclick", _2bd7);
		} else {
			throw "Drag not supported in this browser.";
		}
	}
};
draw2d.Draggable.prototype.onDrop = function(_2be4, _2be5) {
};
draw2d.Draggable.prototype.attachEventHandlers = function() {
	var oThis = this;
	oThis.isAttached = true;
	this.tempMouseMove = function() {
		var _2be7 = arguments[0] || window.event;
		var _2be8 = new draw2d.Point(_2be7.clientX - oThis.diffX, _2be7.clientY
				- oThis.diffY);
		if (oThis.node !== null && oThis.node.getCanSnapToHelper()) {
			_2be8 = oThis.node.getWorkflow().snapToHelper(oThis.node, _2be8);
		}
		oThis.element.style.left = _2be8.x + "px";
		oThis.element.style.top = _2be8.y + "px";
		if (oThis.node !== null) {
			var _2be9 = oThis.node.getWorkflow().getScrollLeft();
			var _2bea = oThis.node.getWorkflow().getScrollTop();
			var _2beb = oThis.node.getWorkflow().getAbsoluteX();
			var _2bec = oThis.node.getWorkflow().getAbsoluteY();
			var _2bed = oThis.getDropTarget(_2be7.clientX + _2be9 - _2beb,
					_2be7.clientY + _2bea - _2bec);
			var _2bee = oThis.getCompartment(_2be7.clientX + _2be9 - _2beb,
					_2be7.clientY + _2bea - _2bec);
			if (draw2d.Drag.currentTarget !== null
					&& _2bed != draw2d.Drag.currentTarget) {
				var _2bef = new draw2d.DragDropEvent();
				_2bef.initDragDropEvent("dragleave", false, oThis);
				draw2d.Drag.currentTarget.dispatchEvent(_2bef);
			}
			if (_2bed !== null && _2bed !== draw2d.Drag.currentTarget) {
				var _2bef = new draw2d.DragDropEvent();
				_2bef.initDragDropEvent("dragenter", false, oThis);
				_2bed.dispatchEvent(_2bef);
			}
			draw2d.Drag.currentTarget = _2bed;
			if (draw2d.Drag.currentCompartment !== null
					&& _2bee !== draw2d.Drag.currentCompartment) {
				var _2bef = new draw2d.DragDropEvent();
				_2bef.initDragDropEvent("figureleave", false, oThis);
				draw2d.Drag.currentCompartment.dispatchEvent(_2bef);
			}
			if (_2bee !== null && _2bee.node != oThis.node
					&& _2bee !== draw2d.Drag.currentCompartment) {
				var _2bef = new draw2d.DragDropEvent();
				_2bef.initDragDropEvent("figureenter", false, oThis);
				_2bee.dispatchEvent(_2bef);
			}
			draw2d.Drag.currentCompartment = _2bee;
		}
		var _2bf0 = new draw2d.DragDropEvent();
		_2bf0.initDragDropEvent("drag", false);
		oThis.dispatchEvent(_2bf0);
	};
	oThis.tempMouseUp = function() {
		oThis.detachEventHandlers();
		var _2bf1 = arguments[0] || window.event;
		if (oThis.node !== null) {
			var _2bf2 = oThis.node.getWorkflow().getScrollLeft();
			var _2bf3 = oThis.node.getWorkflow().getScrollTop();
			var _2bf4 = oThis.node.getWorkflow().getAbsoluteX();
			var _2bf5 = oThis.node.getWorkflow().getAbsoluteY();
			var _2bf6 = oThis.getDropTarget(_2bf1.clientX + _2bf2 - _2bf4,
					_2bf1.clientY + _2bf3 - _2bf5);
			var _2bf7 = oThis.getCompartment(_2bf1.clientX + _2bf2 - _2bf4,
					_2bf1.clientY + _2bf3 - _2bf5);
			if (_2bf6 !== null) {
				var _2bf8 = new draw2d.DragDropEvent();
				_2bf8.initDragDropEvent("drop", false, oThis);
				_2bf6.dispatchEvent(_2bf8);
			}
			if (_2bf7 !== null && _2bf7.node !== oThis.node) {
				var _2bf8 = new draw2d.DragDropEvent();
				_2bf8.initDragDropEvent("figuredrop", false, oThis);
				_2bf7.dispatchEvent(_2bf8);
			}
			if (draw2d.Drag.currentTarget !== null) {
				var _2bf8 = new draw2d.DragDropEvent();
				_2bf8.initDragDropEvent("dragleave", false, oThis);
				draw2d.Drag.currentTarget.dispatchEvent(_2bf8);
				draw2d.Drag.currentTarget = null;
			}
		}
		var _2bf9 = new draw2d.DragDropEvent();
		_2bf9.initDragDropEvent("dragend", false);
		oThis.dispatchEvent(_2bf9);
		oThis.onDrop(_2bf1.clientX, _2bf1.clientY);
		draw2d.Drag.currentCompartment = null;
		draw2d.Drag.clearCurrent();
	};
	if (document.body.addEventListener) {
		document.body.addEventListener("mousemove", this.tempMouseMove, false);
		document.body.addEventListener("mouseup", this.tempMouseUp, false);
	} else {
		if (document.body.attachEvent) {
			document.body.attachEvent("onmousemove", this.tempMouseMove);
			document.body.attachEvent("onmouseup", this.tempMouseUp);
		} else {
			throw new Error("Drag doesn't support this browser.");
		}
	}
};
draw2d.Draggable.prototype.detachEventHandlers = function() {
	this.isAttached = false;
	if (document.body.removeEventListener) {
		document.body.removeEventListener("mousemove", this.tempMouseMove,
				false);
		document.body.removeEventListener("mouseup", this.tempMouseUp, false);
	} else {
		if (document.body.detachEvent) {
			document.body.detachEvent("onmousemove", this.tempMouseMove);
			document.body.detachEvent("onmouseup", this.tempMouseUp);
		} else {
			throw new Error("Drag doesn't support this browser.");
		}
	}
};
draw2d.Draggable.prototype.getDropTarget = function(x, y) {
	for ( var i = 0; i < this.targets.getSize(); i++) {
		var _2bfd = this.targets.get(i);
		if (_2bfd.node.isOver(x, y) && _2bfd.node !== this.node) {
			return _2bfd;
		}
	}
	return null;
};
draw2d.Draggable.prototype.getCompartment = function(x, y) {
	var _2c00 = null;
	for ( var i = 0; i < this.node.getWorkflow().compartments.getSize(); i++) {
		var _2c02 = this.node.getWorkflow().compartments.get(i);
		if (_2c02.isOver(x, y) && _2c02 !== this.node) {
			if (_2c00 === null) {
				_2c00 = _2c02;
			} else {
				if (_2c00.getZOrder() < _2c02.getZOrder()) {
					_2c00 = _2c02;
				}
			}
		}
	}
	return _2c00 === null ? null : _2c00.dropable;
};
draw2d.Draggable.prototype.getLeft = function() {
	return this.element.offsetLeft;
};
draw2d.Draggable.prototype.getTop = function() {
	return this.element.offsetTop;
};
draw2d.DragDropEvent = function() {
	draw2d.AbstractEvent.call(this);
};
draw2d.DragDropEvent.prototype = new draw2d.AbstractEvent();
draw2d.DragDropEvent.prototype.initDragDropEvent = function(sType, _2c04, _2c05) {
	this.initEvent(sType, _2c04);
	this.relatedTarget = _2c05;
};
draw2d.DropTarget = function(_2c06) {
	draw2d.EventTarget.call(this);
	this.construct(_2c06);
};
draw2d.DropTarget.prototype = new draw2d.EventTarget();
draw2d.DropTarget.prototype.construct = function(_2c07) {
	this.element = _2c07;
};
draw2d.DropTarget.prototype.getLeft = function() {
	var el = this.element;
	var ol = el.offsetLeft;
	while ((el = el.offsetParent) !== null) {
		ol += el.offsetLeft;
	}
	return ol;
};
draw2d.DropTarget.prototype.getTop = function() {
	var el = this.element;
	var ot = el.offsetTop;
	while ((el = el.offsetParent) !== null) {
		ot += el.offsetTop;
	}
	return ot;
};
draw2d.DropTarget.prototype.getHeight = function() {
	return this.element.offsetHeight;
};
draw2d.DropTarget.prototype.getWidth = function() {
	return this.element.offsetWidth;
};
draw2d.PositionConstants = function() {
};
draw2d.PositionConstants.NORTH = 1;
draw2d.PositionConstants.SOUTH = 4;
draw2d.PositionConstants.WEST = 8;
draw2d.PositionConstants.EAST = 16;
draw2d.Color = function(red, green, blue) {
	if (typeof green == "undefined") {
		var rgb = this.hex2rgb(red);
		this.red = rgb[0];
		this.green = rgb[1];
		this.blue = rgb[2];
	} else {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}
};
draw2d.Color.prototype.type = "draw2d.Color";
draw2d.Color.prototype.getHTMLStyle = function() {
	return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
};
draw2d.Color.prototype.getRed = function() {
	return this.red;
};
draw2d.Color.prototype.getGreen = function() {
	return this.green;
};
draw2d.Color.prototype.getBlue = function() {
	return this.blue;
};
draw2d.Color.prototype.getIdealTextColor = function() {
	var _2596 = 105;
	var _2597 = (this.red * 0.299) + (this.green * 0.587) + (this.blue * 0.114);
	return (255 - _2597 < _2596) ? new draw2d.Color(0, 0, 0)
			: new draw2d.Color(255, 255, 255);
};
draw2d.Color.prototype.hex2rgb = function(_2598) {
	_2598 = _2598.replace("#", "");
	return ({
		0 : parseInt(_2598.substr(0, 2), 16),
		1 : parseInt(_2598.substr(2, 2), 16),
		2 : parseInt(_2598.substr(4, 2), 16)
	});
};
draw2d.Color.prototype.hex = function() {
	return (this.int2hex(this.red) + this.int2hex(this.green) + this
			.int2hex(this.blue));
};
draw2d.Color.prototype.int2hex = function(v) {
	v = Math.round(Math.min(Math.max(0, v), 255));
	return ("0123456789ABCDEF".charAt((v - v % 16) / 16) + "0123456789ABCDEF"
			.charAt(v % 16));
};
draw2d.Color.prototype.darker = function(_259a) {
	var red = parseInt(Math.round(this.getRed() * (1 - _259a)));
	var green = parseInt(Math.round(this.getGreen() * (1 - _259a)));
	var blue = parseInt(Math.round(this.getBlue() * (1 - _259a)));
	if (red < 0) {
		red = 0;
	} else {
		if (red > 255) {
			red = 255;
		}
	}
	if (green < 0) {
		green = 0;
	} else {
		if (green > 255) {
			green = 255;
		}
	}
	if (blue < 0) {
		blue = 0;
	} else {
		if (blue > 255) {
			blue = 255;
		}
	}
	return new draw2d.Color(red, green, blue);
};
draw2d.Color.prototype.lighter = function(_259e) {
	var red = parseInt(Math.round(this.getRed() * (1 + _259e)));
	var green = parseInt(Math.round(this.getGreen() * (1 + _259e)));
	var blue = parseInt(Math.round(this.getBlue() * (1 + _259e)));
	if (red < 0) {
		red = 0;
	} else {
		if (red > 255) {
			red = 255;
		}
	}
	if (green < 0) {
		green = 0;
	} else {
		if (green > 255) {
			green = 255;
		}
	}
	if (blue < 0) {
		blue = 0;
	} else {
		if (blue > 255) {
			blue = 255;
		}
	}
	return new draw2d.Color(red, green, blue);
};
draw2d.Point = function(x, y) {
	this.x = x;
	this.y = y;
};
draw2d.Point.prototype.type = "draw2d.Point";
draw2d.Point.prototype.getX = function() {
	return this.x;
};
draw2d.Point.prototype.getY = function() {
	return this.y;
};
draw2d.Point.prototype.getPosition = function(p) {
	var dx = p.x - this.x;
	var dy = p.y - this.y;
	if (Math.abs(dx) > Math.abs(dy)) {
		if (dx < 0) {
			return draw2d.PositionConstants.WEST;
		}
		return draw2d.PositionConstants.EAST;
	}
	if (dy < 0) {
		return draw2d.PositionConstants.NORTH;
	}
	return draw2d.PositionConstants.SOUTH;
};
draw2d.Point.prototype.equals = function(o) {
	return this.x == o.x && this.y == o.y;
};
draw2d.Point.prototype.getDistance = function(other) {
	return Math.sqrt((this.x - other.x) * (this.x - other.x)
			+ (this.y - other.y) * (this.y - other.y));
};
draw2d.Point.prototype.getTranslated = function(other) {
	return new draw2d.Point(this.x + other.x, this.y + other.y);
};
draw2d.Point.prototype.getPersistentAttributes = function() {
	return {
		x : this.x,
		y : this.y
	};
};
draw2d.Dimension = function(x, y, w, h) {
	draw2d.Point.call(this, x, y);
	this.w = w;
	this.h = h;
};
draw2d.Dimension.prototype = new draw2d.Point();
draw2d.Dimension.prototype.type = "draw2d.Dimension";
draw2d.Dimension.prototype.translate = function(dx, dy) {
	this.x += dx;
	this.y += dy;
	return this;
};
draw2d.Dimension.prototype.resize = function(dw, dh) {
	this.w += dw;
	this.h += dh;
	return this;
};
draw2d.Dimension.prototype.setBounds = function(rect) {
	this.x = rect.x;
	this.y = rect.y;
	this.w = rect.w;
	this.h = rect.h;
	return this;
};
draw2d.Dimension.prototype.isEmpty = function() {
	return this.w <= 0 || this.h <= 0;
};
draw2d.Dimension.prototype.getWidth = function() {
	return this.w;
};
draw2d.Dimension.prototype.getHeight = function() {
	return this.h;
};
draw2d.Dimension.prototype.getRight = function() {
	return this.x + this.w;
};
draw2d.Dimension.prototype.getBottom = function() {
	return this.y + this.h;
};
draw2d.Dimension.prototype.getTopLeft = function() {
	return new draw2d.Point(this.x, this.y);
};
draw2d.Dimension.prototype.getCenter = function() {
	return new draw2d.Point(this.x + this.w / 2, this.y + this.h / 2);
};
draw2d.Dimension.prototype.getBottomRight = function() {
	return new draw2d.Point(this.x + this.w, this.y + this.h);
};
draw2d.Dimension.prototype.equals = function(o) {
	return this.x == o.x && this.y == o.y && this.w == o.w && this.h == o.h;
};
draw2d.SnapToHelper = function(_16f8) {
	this.workflow = _16f8;
};
draw2d.SnapToHelper.NORTH = 1;
draw2d.SnapToHelper.SOUTH = 4;
draw2d.SnapToHelper.WEST = 8;
draw2d.SnapToHelper.EAST = 16;
draw2d.SnapToHelper.CENTER = 32;
draw2d.SnapToHelper.NORTH_EAST = draw2d.SnapToHelper.NORTH
		| draw2d.SnapToHelper.EAST;
draw2d.SnapToHelper.NORTH_WEST = draw2d.SnapToHelper.NORTH
		| draw2d.SnapToHelper.WEST;
draw2d.SnapToHelper.SOUTH_EAST = draw2d.SnapToHelper.SOUTH
		| draw2d.SnapToHelper.EAST;
draw2d.SnapToHelper.SOUTH_WEST = draw2d.SnapToHelper.SOUTH
		| draw2d.SnapToHelper.WEST;
draw2d.SnapToHelper.NORTH_SOUTH = draw2d.SnapToHelper.NORTH
		| draw2d.SnapToHelper.SOUTH;
draw2d.SnapToHelper.EAST_WEST = draw2d.SnapToHelper.EAST
		| draw2d.SnapToHelper.WEST;
draw2d.SnapToHelper.NSEW = draw2d.SnapToHelper.NORTH_SOUTH
		| draw2d.SnapToHelper.EAST_WEST;
draw2d.SnapToHelper.prototype.snapPoint = function(_16f9, _16fa, _16fb) {
	return _16fa;
};
draw2d.SnapToHelper.prototype.snapRectangle = function(_16fc, _16fd) {
	return _16fc;
};
draw2d.SnapToHelper.prototype.onSetDocumentDirty = function() {
};
draw2d.SnapToGrid = function(_2106) {
	draw2d.SnapToHelper.call(this, _2106);
};
draw2d.SnapToGrid.prototype = new draw2d.SnapToHelper();
draw2d.SnapToGrid.prototype.type = "draw2d.SnapToGrid";
draw2d.SnapToGrid.prototype.snapPoint = function(_2107, _2108, _2109) {
	_2109.x = this.workflow.gridWidthX
			* Math
					.floor(((_2108.x + this.workflow.gridWidthX / 2) / this.workflow.gridWidthX));
	_2109.y = this.workflow.gridWidthY
			* Math
					.floor(((_2108.y + this.workflow.gridWidthY / 2) / this.workflow.gridWidthY));
	return 0;
};
draw2d.SnapToGrid.prototype.snapRectangle = function(_210a, _210b) {
	_210b.x = _210a.x;
	_210b.y = _210a.y;
	_210b.w = _210a.w;
	_210b.h = _210a.h;
	return 0;
};
draw2d.SnapToGeometryEntry = function(type, _286d) {
	this.type = type;
	this.location = _286d;
};
draw2d.SnapToGeometryEntry.prototype.getLocation = function() {
	return this.location;
};
draw2d.SnapToGeometryEntry.prototype.getType = function() {
	return this.type;
};
draw2d.SnapToGeometry = function(_25c7) {
	draw2d.SnapToHelper.call(this, _25c7);
	this.rows = null;
	this.cols = null;
};
draw2d.SnapToGeometry.prototype = new draw2d.SnapToHelper();
draw2d.SnapToGeometry.THRESHOLD = 5;
draw2d.SnapToGeometry.prototype.snapPoint = function(_25c8, _25c9, _25ca) {
	if (this.rows === null || this.cols === null) {
		this.populateRowsAndCols();
	}
	if ((_25c8 & draw2d.SnapToHelper.EAST) !== 0) {
		var _25cb = this.getCorrectionFor(this.cols, _25c9.getX() - 1, 1);
		if (_25cb !== draw2d.SnapToGeometry.THRESHOLD) {
			_25c8 &= ~draw2d.SnapToHelper.EAST;
			_25ca.x += _25cb;
		}
	}
	if ((_25c8 & draw2d.SnapToHelper.WEST) !== 0) {
		var _25cc = this.getCorrectionFor(this.cols, _25c9.getX(), -1);
		if (_25cc !== draw2d.SnapToGeometry.THRESHOLD) {
			_25c8 &= ~draw2d.SnapToHelper.WEST;
			_25ca.x += _25cc;
		}
	}
	if ((_25c8 & draw2d.SnapToHelper.SOUTH) !== 0) {
		var _25cd = this.getCorrectionFor(this.rows, _25c9.getY() - 1, 1);
		if (_25cd !== draw2d.SnapToGeometry.THRESHOLD) {
			_25c8 &= ~draw2d.SnapToHelper.SOUTH;
			_25ca.y += _25cd;
		}
	}
	if ((_25c8 & draw2d.SnapToHelper.NORTH) !== 0) {
		var _25ce = this.getCorrectionFor(this.rows, _25c9.getY(), -1);
		if (_25ce !== draw2d.SnapToGeometry.THRESHOLD) {
			_25c8 &= ~draw2d.SnapToHelper.NORTH;
			_25ca.y += _25ce;
		}
	}
	return _25c8;
};
draw2d.SnapToGeometry.prototype.snapRectangle = function(_25cf, _25d0) {
	var _25d1 = _25cf.getTopLeft();
	var _25d2 = _25cf.getBottomRight();
	var _25d3 = this.snapPoint(draw2d.SnapToHelper.NORTH_WEST, _25cf
			.getTopLeft(), _25d1);
	_25d0.x = _25d1.x;
	_25d0.y = _25d1.y;
	var _25d4 = this.snapPoint(draw2d.SnapToHelper.SOUTH_EAST, _25cf
			.getBottomRight(), _25d2);
	if (_25d3 & draw2d.SnapToHelper.WEST) {
		_25d0.x = _25d2.x - _25cf.getWidth();
	}
	if (_25d3 & draw2d.SnapToHelper.NORTH) {
		_25d0.y = _25d2.y - _25cf.getHeight();
	}
	return _25d3 | _25d4;
};
draw2d.SnapToGeometry.prototype.populateRowsAndCols = function() {
	this.rows = [];
	this.cols = [];
	var _25d5 = this.workflow.getDocument().getFigures();
	var index = 0;
	for ( var i = 0; i < _25d5.getSize(); i++) {
		var _25d8 = _25d5.get(i);
		if (_25d8 != this.workflow.getCurrentSelection()) {
			var _25d9 = _25d8.getBounds();
			this.cols[index * 3] = new draw2d.SnapToGeometryEntry(-1, _25d9
					.getX());
			this.rows[index * 3] = new draw2d.SnapToGeometryEntry(-1, _25d9
					.getY());
			this.cols[index * 3 + 1] = new draw2d.SnapToGeometryEntry(0,
					_25d9.x + (_25d9.getWidth() - 1) / 2);
			this.rows[index * 3 + 1] = new draw2d.SnapToGeometryEntry(0,
					_25d9.y + (_25d9.getHeight() - 1) / 2);
			this.cols[index * 3 + 2] = new draw2d.SnapToGeometryEntry(1, _25d9
					.getRight() - 1);
			this.rows[index * 3 + 2] = new draw2d.SnapToGeometryEntry(1, _25d9
					.getBottom() - 1);
			index++;
		}
	}
};
draw2d.SnapToGeometry.prototype.getCorrectionFor = function(_25da, value, side) {
	var _25dd = draw2d.SnapToGeometry.THRESHOLD;
	var _25de = draw2d.SnapToGeometry.THRESHOLD;
	for ( var i = 0; i < _25da.length; i++) {
		var entry = _25da[i];
		var _25e1;
		if (entry.type === -1 && side !== 0) {
			_25e1 = Math.abs(value - entry.location);
			if (_25e1 < _25dd) {
				_25dd = _25e1;
				_25de = entry.location - value;
			}
		} else {
			if (entry.type === 0 && side === 0) {
				_25e1 = Math.abs(value - entry.location);
				if (_25e1 < _25dd) {
					_25dd = _25e1;
					_25de = entry.location - value;
				}
			} else {
				if (entry.type === 1 && side !== 0) {
					_25e1 = Math.abs(value - entry.location);
					if (_25e1 < _25dd) {
						_25dd = _25e1;
						_25de = entry.location - value;
					}
				}
			}
		}
	}
	return _25de;
};
draw2d.SnapToGeometry.prototype.onSetDocumentDirty = function() {
	this.rows = null;
	this.cols = null;
};
draw2d.Border = function() {
	this.color = null;
};
draw2d.Border.prototype.type = "draw2d.Border";
draw2d.Border.prototype.dispose = function() {
	this.color = null;
};
draw2d.Border.prototype.getHTMLStyle = function() {
	return "";
};
draw2d.Border.prototype.setColor = function(c) {
	this.color = c;
};
draw2d.Border.prototype.getColor = function() {
	return this.color;
};
draw2d.Border.prototype.refresh = function() {
};
draw2d.LineBorder = function(width) {
	draw2d.Border.call(this);
	this.width = 1;
	if (width) {
		this.width = width;
	}
	this.figure = null;
};
draw2d.LineBorder.prototype = new draw2d.Border();
draw2d.LineBorder.prototype.type = "draw2d.LineBorder";
draw2d.LineBorder.prototype.dispose = function() {
	draw2d.Border.prototype.dispose.call(this);
	this.figure = null;
};
draw2d.LineBorder.prototype.setLineWidth = function(w) {
	this.width = w;
	if (this.figure !== null) {
		this.figure.html.style.border = this.getHTMLStyle();
	}
};
draw2d.LineBorder.prototype.getHTMLStyle = function() {
	if (this.getColor() !== null) {
		return this.width + "px solid " + this.getColor().getHTMLStyle();
	}
	return this.width + "px solid black";
};
draw2d.LineBorder.prototype.refresh = function() {
	this.setLineWidth(this.width);
};
draw2d.Figure = function() {
	this.construct();
};
draw2d.Figure.prototype.type = "draw2d.Figure";
draw2d.Figure.ZOrderBaseIndex = 100;
draw2d.Figure.setZOrderBaseIndex = function(index) {
	draw2d.Figure.ZOrderBaseIndex = index;
};
draw2d.Figure.prototype.construct = function() {
	this.lastDragStartTime = 0;
	this.x = 0;
	this.y = 0;
	this.width = 10;
	this.height = 10;
	this.border = null;
	this.id = draw2d.UUID.create();
	this.html = this.createHTMLElement();
	this.canvas = null;
	this.workflow = null;
	this.draggable = null;
	this.parent = null;
	this.isMoving = false;
	this.canSnapToHelper = true;
	this.snapToGridAnchor = new draw2d.Point(0, 0);
	this.timer = -1;
	this.model = null;
	this.alpha = 1;
	this.alphaBeforeOnDrag = 1;
	this.properties = {};
	this.moveListener = new draw2d.ArrayList();
	this.setDimension(this.width, this.height);
	this.setDeleteable(true);
	this.setCanDrag(true);
	this.setResizeable(true);
	this.setSelectable(true);
};
draw2d.Figure.prototype.dispose = function() {
	this.canvas = null;
	this.workflow = null;
	this.moveListener = null;
	if (this.draggable !== null) {
		this.draggable.removeEventListener("mouseenter", this.tmpMouseEnter);
		this.draggable.removeEventListener("mouseleave", this.tmpMouseLeave);
		this.draggable.removeEventListener("dragend", this.tmpDragend);
		this.draggable.removeEventListener("dragstart", this.tmpDragstart);
		this.draggable.removeEventListener("drag", this.tmpDrag);
		this.draggable.removeEventListener("dblclick", this.tmpDoubleClick);
		this.draggable.node = null;
		this.draggable.target.removeAllElements();
	}
	this.draggable = null;
	if (this.border !== null) {
		this.border.dispose();
	}
	this.border = null;
	if (this.parent !== null) {
		this.parent.removeChild(this);
	}
};
draw2d.Figure.prototype.getProperties = function() {
	return this.properties;
};
draw2d.Figure.prototype.getProperty = function(key) {
	return this.properties[key];
};
draw2d.Figure.prototype.setProperty = function(key, value) {
	this.properties[key] = value;
	this.setDocumentDirty();
};
draw2d.Figure.prototype.getId = function() {
	return this.id;
};
draw2d.Figure.prototype.setId = function(id) {
	this.id = id;
	if (this.html !== null) {
		this.html.id = id;
	}
};
draw2d.Figure.prototype.setCanvas = function(_201f) {
	this.canvas = _201f;
};
draw2d.Figure.prototype.getWorkflow = function() {
	return this.workflow;
};
draw2d.Figure.prototype.setWorkflow = function(_2020) {
	if (this.draggable === null) {
		this.html.tabIndex = "0";
		var oThis = this;
		this.keyDown = function(event) {
			event.cancelBubble = true;
			event.returnValue = true;
			oThis.onKeyDown(event.keyCode, event.ctrlKey);
		};
		if (this.html.addEventListener) {
			this.html.addEventListener("keydown", this.keyDown, false);
		} else {
			if (this.html.attachEvent) {
				this.html.attachEvent("onkeydown", this.keyDown);
			}
		}
		this.draggable = new draw2d.Draggable(this.html,
				draw2d.Draggable.DRAG_X | draw2d.Draggable.DRAG_Y);
		this.draggable.node = this;
		this.tmpContextMenu = function(_2023) {
			oThis.onContextMenu(oThis.x + _2023.x, _2023.y + oThis.y);
		};
		this.tmpMouseEnter = function(_2024) {
			oThis.onMouseEnter();
		};
		this.tmpMouseLeave = function(_2025) {
			oThis.onMouseLeave();
		};
		this.tmpDragend = function(_2026) {
			oThis.onDragend();
		};
		this.tmpDragstart = function(_2027) {
			var w = oThis.workflow;
			w.showMenu(null);
			if (w.toolPalette && w.toolPalette.activeTool) {
				_2027.returnValue = false;
				w.onMouseDown(oThis.x + _2027.x, _2027.y + oThis.y);
				w.onMouseUp(oThis.x + _2027.x, _2027.y + oThis.y);
				return;
			}
			if (!(oThis instanceof draw2d.ResizeHandle)
					&& !(oThis instanceof draw2d.Port)) {
				var line = w.getBestLine(oThis.x + _2027.x, _2027.y + oThis.y);
				if (line !== null) {
					_2027.returnValue = false;
					w.setCurrentSelection(line);
					w.showLineResizeHandles(line);
					w.onMouseDown(oThis.x + _2027.x, _2027.y + oThis.y);
					return;
				} else {
					if (oThis.isSelectable()) {
						w.showResizeHandles(oThis);
						w.setCurrentSelection(oThis);
					}
				}
			}
			_2027.returnValue = oThis.onDragstart(_2027.x, _2027.y);
		};
		this.tmpDrag = function(_202a) {
			oThis.onDrag();
		};
		this.tmpDoubleClick = function(_202b) {
			oThis.onDoubleClick();
		};
		this.draggable.addEventListener("contextmenu", this.tmpContextMenu);
		this.draggable.addEventListener("mouseenter", this.tmpMouseEnter);
		this.draggable.addEventListener("mouseleave", this.tmpMouseLeave);
		this.draggable.addEventListener("dragend", this.tmpDragend);
		this.draggable.addEventListener("dragstart", this.tmpDragstart);
		this.draggable.addEventListener("drag", this.tmpDrag);
		this.draggable.addEventListener("dblclick", this.tmpDoubleClick);
	}
	this.workflow = _2020;
};
draw2d.Figure.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.id = this.id;
	item.style.position = "absolute";
	item.style.left = this.x + "px";
	item.style.top = this.y + "px";
	item.style.height = this.width + "px";
	item.style.width = this.height + "px";
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.style.outline = "none";
	item.style.zIndex = "" + draw2d.Figure.ZOrderBaseIndex;
	return item;
};
draw2d.Figure.prototype.setParent = function(_202d) {
	this.parent = _202d;
};
draw2d.Figure.prototype.getParent = function() {
	return this.parent;
};
draw2d.Figure.prototype.getZOrder = function() {
	return parseInt(this.html.style.zIndex);
};
draw2d.Figure.prototype.setZOrder = function(index) {
	this.html.style.zIndex = index;
};
draw2d.Figure.prototype.hasFixedPosition = function() {
	return false;
};
draw2d.Figure.prototype.getMinWidth = function() {
	return 5;
};
draw2d.Figure.prototype.getMinHeight = function() {
	return 5;
};
draw2d.Figure.prototype.getHTMLElement = function() {
	if (this.html === null) {
		this.html = this.createHTMLElement();
	}
	return this.html;
};
draw2d.Figure.prototype.paint = function() {
};
draw2d.Figure.prototype.setBorder = function(_202f) {
	if (this.border !== null) {
		this.border.figure = null;
	}
	this.border = _202f;
	this.border.figure = this;
	this.border.refresh();
	this.setDocumentDirty();
};
draw2d.Figure.prototype.onRemove = function(_2030) {
};
draw2d.Figure.prototype.onContextMenu = function(x, y) {
	var menu = this.getContextMenu();
	if (menu !== null) {
		this.workflow.showMenu(menu, x, y);
	}
};
draw2d.Figure.prototype.getContextMenu = function() {
	return null;
};
draw2d.Figure.prototype.onDoubleClick = function() {
	fireDoubleClick(this.id);
};
draw2d.Figure.prototype.onMouseEnter = function() {
};
draw2d.Figure.prototype.onMouseLeave = function() {
};
draw2d.Figure.prototype.onDrag = function() {
	this.x = this.draggable.getLeft();
	this.y = this.draggable.getTop();
	if (this.isMoving == false) {
		this.isMoving = true;
		this.alphaBeforeOnDrag = this.getAlpha();
		this.setAlpha(this.alphaBeforeOnDrag * 0.5);
	}
	this.fireMoveEvent();
};
draw2d.Figure.prototype.onDragend = function() {
	if (this.getWorkflow().getEnableSmoothFigureHandling() === true) {
		var oThis = this;
		var _2035 = function() {
			if (oThis.alpha < oThis.alphaBeforeOnDrag) {
				oThis.setAlpha(Math.min(1, oThis.alpha + 0.05));
			} else {
				window.clearInterval(oThis.timer);
				oThis.timer = -1;
			}
		};
		if (oThis.timer > 0) {
			window.clearInterval(oThis.timer);
		}
		oThis.timer = window.setInterval(_2035, 20);
	} else {
		this.setAlpha(this.alphaBeforeOnDrag);
	}
	this.command.setPosition(this.x, this.y);
	this.workflow.commandStack.execute(this.command);
	this.command = null;
	this.isMoving = false;
	this.workflow.hideSnapToHelperLines();
	this.fireMoveEvent();
};
draw2d.Figure.prototype.onDragstart = function(x, y) {
	this.command = this.createCommand(new draw2d.EditPolicy(
			draw2d.EditPolicy.MOVE));
	return this.command !== null;
};
draw2d.Figure.prototype.setCanDrag = function(flag) {
	this.canDrag = flag;
	if (flag) {
		this.html.style.cursor = "move";
	} else {
		this.html.style.cursor = "";
	}
};
draw2d.Figure.prototype.getCanDrag = function() {
	return this.canDrag;
};
draw2d.Figure.prototype.setAlpha = function(_2039) {
	if (this.alpha === _2039) {
		return;
	}
	this.alpha = Math.max(0, Math.min(1, _2039));
	if (this.alpha == 1) {
		this.html.style.filter = "";
		this.html.style.opacity = "";
	} else {
		this.html.style.filter = "alpha(opacity="
				+ Math.round(this.alpha * 100) + ")";
		this.html.style.opacity = this.alpha;
	}
};
draw2d.Figure.prototype.getAlpha = function() {
	return this.alpha;
};
draw2d.Figure.prototype.setDimension = function(w, h) {
	this.width = Math.max(this.getMinWidth(), w);
	this.height = Math.max(this.getMinHeight(), h);
	if (this.html === null) {
		return;
	}
	this.html.style.width = this.width + "px";
	this.html.style.height = this.height + "px";
	this.fireMoveEvent();
	if (this.workflow != null && this.workflow.getCurrentSelection() == this) {
		this.workflow.showResizeHandles(this);
	}
};
draw2d.Figure.prototype.setPosition = function(xPos, yPos) {
	this.x = xPos;
	this.y = yPos;
	if (this.html === null) {
		return;
	}
	this.html.style.left = this.x + "px";
	this.html.style.top = this.y + "px";
	this.fireMoveEvent();
	if (this.workflow != null && this.workflow.getCurrentSelection() == this) {
		this.workflow.showResizeHandles(this);
	}
};
draw2d.Figure.prototype.isResizeable = function() {
	return this.resizeable;
};
draw2d.Figure.prototype.setResizeable = function(flag) {
	this.resizeable = flag;
};
draw2d.Figure.prototype.isSelectable = function() {
	return this.selectable;
};
draw2d.Figure.prototype.setSelectable = function(flag) {
	this.selectable = flag;
};
draw2d.Figure.prototype.isStrechable = function() {
	return true;
};
draw2d.Figure.prototype.isDeleteable = function() {
	return this.deleteable;
};
draw2d.Figure.prototype.setDeleteable = function(flag) {
	this.deleteable = flag;
};
draw2d.Figure.prototype.setCanSnapToHelper = function(flag) {
	this.canSnapToHelper = flag;
};
draw2d.Figure.prototype.getCanSnapToHelper = function() {
	return this.canSnapToHelper;
};
draw2d.Figure.prototype.getSnapToGridAnchor = function() {
	return this.snapToGridAnchor;
};
draw2d.Figure.prototype.setSnapToGridAnchor = function(point) {
	this.snapToGridAnchor = point;
};
draw2d.Figure.prototype.getBounds = function() {
	return new draw2d.Dimension(this.getX(), this.getY(), this.getWidth(), this
			.getHeight());
};
draw2d.Figure.prototype.getWidth = function() {
	return this.width;
};
draw2d.Figure.prototype.getHeight = function() {
	return this.height;
};
draw2d.Figure.prototype.getY = function() {
	return this.y;
};
draw2d.Figure.prototype.getX = function() {
	return this.x;
};
draw2d.Figure.prototype.getAbsoluteY = function() {
	return this.y;
};
draw2d.Figure.prototype.getAbsoluteX = function() {
	return this.x;
};
draw2d.Figure.prototype.onKeyDown = function(_2043, ctrl) {
	if (_2043 == 46) {
		this.workflow.getCommandStack().execute(
				this.createCommand(new draw2d.EditPolicy(
						draw2d.EditPolicy.DELETE)));
	}
	if (ctrl) {
		this.workflow.onKeyDown(_2043, ctrl);
	}
};
draw2d.Figure.prototype.getPosition = function() {
	return new draw2d.Point(this.x, this.y);
};
draw2d.Figure.prototype.isOver = function(iX, iY) {
	var x = this.getAbsoluteX();
	var y = this.getAbsoluteY();
	var iX2 = x + this.width;
	var iY2 = y + this.height;
	return (iX >= x && iX <= iX2 && iY >= y && iY <= iY2);
};
draw2d.Figure.prototype.attachMoveListener = function(_204b) {
	if (_204b === null || this.moveListener === null) {
		return;
	}
	this.moveListener.add(_204b);
};
draw2d.Figure.prototype.detachMoveListener = function(_204c) {
	if (_204c === null || this.moveListener === null) {
		return;
	}
	this.moveListener.remove(_204c);
};
draw2d.Figure.prototype.fireMoveEvent = function() {
	this.setDocumentDirty();
	var size = this.moveListener.getSize();
	for ( var i = 0; i < size; i++) {
		this.moveListener.get(i).onOtherFigureMoved(this);
	}
};
draw2d.Figure.prototype.setModel = function(model) {
	if (this.model !== null) {
		this.model.removePropertyChangeListener(this);
	}
	this.model = model;
	if (this.model !== null) {
		this.model.addPropertyChangeListener(this);
	}
};
draw2d.Figure.prototype.getModel = function() {
	return this.model;
};
draw2d.Figure.prototype.onOtherFigureMoved = function(_2050) {
};
draw2d.Figure.prototype.setDocumentDirty = function() {
	if (this.workflow != null) {
		this.workflow.setDocumentDirty();
	}
};
draw2d.Figure.prototype.disableTextSelection = function(_2051) {
	_2051.onselectstart = function() {
		return false;
	};
	_2051.unselectable = "on";
	_2051.className = _2051.className + " unselectable";
	_2051.onmousedown = function() {
		return false;
	};
};
draw2d.Figure.prototype.createCommand = function(_2052) {
	if (_2052.getPolicy() == draw2d.EditPolicy.MOVE) {
		if (!this.canDrag) {
			return null;
		}
		return new draw2d.CommandMove(this);
	}
	if (_2052.getPolicy() == draw2d.EditPolicy.DELETE) {
		if (!this.isDeleteable()) {
			return null;
		}
		return new draw2d.CommandDelete(this);
	}
	if (_2052.getPolicy() == draw2d.EditPolicy.RESIZE) {
		if (!this.isResizeable()) {
			return null;
		}
		return new draw2d.CommandResize(this);
	}
	return null;
};
draw2d.Node = function() {
	this.bgColor = null;
	this.lineColor = new draw2d.Color(128, 128, 255);
	this.lineStroke = 1;
	this.ports = new draw2d.ArrayList();
	draw2d.Figure.call(this);
};
draw2d.Node.prototype = new draw2d.Figure();
draw2d.Node.prototype.type = "draw2d.Node";
draw2d.Node.prototype.dispose = function() {
	for ( var i = 0; i < this.ports.getSize(); i++) {
		this.ports.get(i).dispose();
	}
	this.ports = null;
	draw2d.Figure.prototype.dispose.call(this);
};
draw2d.Node.prototype.createHTMLElement = function() {
	var item = draw2d.Figure.prototype.createHTMLElement.call(this);
	item.style.width = "auto";
	item.style.height = "auto";
	item.style.margin = "0px";
	item.style.padding = "0px";
	if (this.lineColor !== null) {
		item.style.border = this.lineStroke + "px solid "
				+ this.lineColor.getHTMLStyle();
	}
	item.style.fontSize = "1px";
	if (this.bgColor !== null) {
		item.style.backgroundColor = this.bgColor.getHTMLStyle();
	}
	return item;
};
draw2d.Node.prototype.paint = function() {
	draw2d.Figure.prototype.paint.call(this);
	for ( var i = 0; i < this.ports.getSize(); i++) {
		this.ports.get(i).paint();
	}
};
draw2d.Node.prototype.getPorts = function() {
	return this.ports;
};
draw2d.Node.prototype.getInputPorts = function() {
	var _2485 = new draw2d.ArrayList();
	for ( var i = 0; i < this.ports.getSize(); i++) {
		var port = this.ports.get(i);
		if (port instanceof draw2d.InputPort) {
			_2485.add(port);
		}
	}
	return _2485;
};
draw2d.Node.prototype.getOutputPorts = function() {
	var _2488 = new draw2d.ArrayList();
	for ( var i = 0; i < this.ports.getSize(); i++) {
		var port = this.ports.get(i);
		if (port instanceof draw2d.OutputPort) {
			_2488.add(port);
		}
	}
	return _2488;
};
draw2d.Node.prototype.getPort = function(_248b) {
	if (this.ports === null) {
		return null;
	}
	for ( var i = 0; i < this.ports.getSize(); i++) {
		var port = this.ports.get(i);
		if (port.getName() == _248b) {
			return port;
		}
	}
};
draw2d.Node.prototype.getInputPort = function(_248e) {
	if (this.ports === null) {
		return null;
	}
	for ( var i = 0; i < this.ports.getSize(); i++) {
		var port = this.ports.get(i);
		if (port.getName() == _248e && port instanceof draw2d.InputPort) {
			return port;
		}
	}
};
draw2d.Node.prototype.getOutputPort = function(_2491) {
	if (this.ports === null) {
		return null;
	}
	for ( var i = 0; i < this.ports.getSize(); i++) {
		var port = this.ports.get(i);
		if (port.getName() == _2491 && port instanceof draw2d.OutputPort) {
			return port;
		}
	}
};
draw2d.Node.prototype.addPort = function(port, x, y) {
	this.ports.add(port);
	port.setOrigin(x, y);
	port.setPosition(x, y);
	port.setParent(this);
	port.setDeleteable(false);
	this.html.appendChild(port.getHTMLElement());
	
	if (this.workflow != null) {
		this.workflow.registerPort(port);
	}
};
draw2d.Node.prototype.removePort = function(port) {
	if (this.ports !== null) {
		this.ports.remove(port);
	}
	try {
		this.html.removeChild(port.getHTMLElement());
	} catch (exc) {
	}
	
	if (this.workflow != null) {
		this.workflow.unregisterPort(port);
	}
	var _2498 = port.getConnections();
	for ( var i = 0; i < _2498.getSize(); ++i) {
		this.workflow.removeFigure(_2498.get(i));
	}
};
draw2d.Node.prototype.setWorkflow = function(_249a) {
	var _249b = this.workflow;
	draw2d.Figure.prototype.setWorkflow.call(this, _249a);
	if (_249b != null) {
		for ( var i = 0; i < this.ports.getSize(); i++) {
			_249b.unregisterPort(this.ports.get(i));
		}
	}
	
	if (this.workflow != null) {
		for ( var i = 0; i < this.ports.getSize(); i++) {
			this.workflow.registerPort(this.ports.get(i));
		}
	}
};
draw2d.Node.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.bgColor !== null) {
		this.html.style.backgroundColor = this.bgColor.getHTMLStyle();
	} else {
		this.html.style.backgroundColor = "transparent";
	}
};
draw2d.Node.prototype.getBackgroundColor = function() {
	return this.bgColor;
};
draw2d.Node.prototype.setColor = function(color) {
	this.lineColor = color;
	if (this.lineColor !== null) {
		this.html.style.border = this.lineStroke + "px solid "
				+ this.lineColor.getHTMLStyle();
	} else {
		this.html.style.border = "0px";
	}
};
draw2d.Node.prototype.setLineWidth = function(w) {
	this.lineStroke = w;
	if (this.lineColor !== null) {
		this.html.style.border = this.lineStroke + "px solid "
				+ this.lineColor.getHTMLStyle();
	} else {
		this.html.style.border = "0px";
	}
};
draw2d.Node.prototype.getModelSourceConnections = function() {
	throw "You must override the method [Node.prototype.getModelSourceConnections]";
};
draw2d.Node.prototype.refreshConnections = function() {
	if (this.workflow != null) {
		this.workflow.refreshConnections(this);
	}
};
draw2d.VectorFigure = function() {
	this.bgColor = null;
	this.lineColor = new draw2d.Color(0, 0, 0);
	this.stroke = 1;
	this.graphics = null;
	draw2d.Node.call(this);
};
draw2d.VectorFigure.prototype = new draw2d.Node;
draw2d.VectorFigure.prototype.type = "draw2d.VectorFigure";
draw2d.VectorFigure.prototype.dispose = function() {
	draw2d.Node.prototype.dispose.call(this);
	this.bgColor = null;
	this.lineColor = null;
	if (this.graphics !== null) {
		this.graphics.clear();
	}
	this.graphics = null;
};
draw2d.VectorFigure.prototype.createHTMLElement = function() {
	var item = draw2d.Node.prototype.createHTMLElement.call(this);
	item.style.border = "0px";
	item.style.backgroundColor = "transparent";
	return item;
};
draw2d.VectorFigure.prototype.setWorkflow = function(_1aa0) {
	draw2d.Node.prototype.setWorkflow.call(this, _1aa0);
	if (this.workflow === null) {
		this.graphics.clear();
		this.graphics = null;
	}
};
draw2d.VectorFigure.prototype.paint = function() {
	if (this.html === null) {
		return;
	}
	try {
		if (this.graphics === null) {
			this.graphics = new jsGraphics(this.html);
		} else {
			this.graphics.clear();
		}
		draw2d.Node.prototype.paint.call(this);
		for ( var i = 0; i < this.ports.getSize(); i++) {
			this.getHTMLElement().appendChild(
					this.ports.get(i).getHTMLElement());
		}
	} catch (e) {
		pushErrorStack(e, "draw2d.VectorFigure.prototype.paint=function()["
				+ area + "]");
	}
};
draw2d.VectorFigure.prototype.setDimension = function(w, h) {
	draw2d.Node.prototype.setDimension.call(this, w, h);
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.VectorFigure.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.VectorFigure.prototype.getBackgroundColor = function() {
	return this.bgColor;
};
draw2d.VectorFigure.prototype.setLineWidth = function(w) {
	this.stroke = w;
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.VectorFigure.prototype.setColor = function(color) {
	this.lineColor = color;
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.VectorFigure.prototype.getColor = function() {
	return this.lineColor;
};
draw2d.SVGFigure = function(width, _27f1) {
	this.bgColor = null;
	this.lineColor = new draw2d.Color(0, 0, 0);
	this.stroke = 1;
	this.context = null;
	draw2d.Node.call(this);
	if (width && _27f1) {
		this.setDimension(width, _27f1);
	}
};
draw2d.SVGFigure.prototype = new draw2d.Node();
draw2d.SVGFigure.prototype.type = "draw2d.SVGFigure";
draw2d.SVGFigure.prototype.createHTMLElement = function() {
	var item = new MooCanvas(this.id, {
		width : 100,
		height : 100
	});
	item.style.position = "absolute";
	item.style.left = this.x + "px";
	item.style.top = this.y + "px";
	item.style.zIndex = "" + draw2d.Figure.ZOrderBaseIndex;
	this.context = item.getContext("2d");
	return item;
};
draw2d.SVGFigure.prototype.paint = function() {
	this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
	this.context.fillStyle = "rgba(200,0,0,0.3)";
	this.context.fillRect(0, 0, this.getWidth(), this.getHeight());
};
draw2d.SVGFigure.prototype.setDimension = function(w, h) {
	draw2d.Node.prototype.setDimension.call(this, w, h);
	this.html.width = w;
	this.html.height = h;
	this.html.style.width = w + "px";
	this.html.style.height = h + "px";
	if (this.context !== null) {
		if (this.context.element) {
			this.context.element.style.width = w + "px";
			this.context.element.style.height = h + "px";
		}
		this.paint();
	}
};
draw2d.SVGFigure.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.SVGFigure.prototype.getBackgroundColor = function() {
	return this.bgColor;
};
draw2d.SVGFigure.prototype.setLineWidth = function(w) {
	this.stroke = w;
	if (this.context !== null) {
		this.paint();
	}
};
draw2d.SVGFigure.prototype.setColor = function(color) {
	this.lineColor = color;
	if (this.context !== null) {
		this.paint();
	}
};
draw2d.SVGFigure.prototype.getColor = function() {
	return this.lineColor;
};
draw2d.Label = function(msg) {
	this.msg = msg;
	this.bgColor = null;
	this.color = new draw2d.Color(0, 0, 0);
	this.fontSize = 10;
	this.textNode = null;
	this.align = "center";
	draw2d.Figure.call(this);
};
draw2d.Label.prototype = new draw2d.Figure();
draw2d.Label.prototype.type = "draw2d.Label";
draw2d.Label.prototype.createHTMLElement = function() {
	var item = draw2d.Figure.prototype.createHTMLElement.call(this);
	this.textNode = document.createTextNode(this.msg);
	item.appendChild(this.textNode);
	item.style.color = this.color.getHTMLStyle();
	item.style.fontSize = this.fontSize + "pt";
	item.style.width = "auto";
	item.style.height = "auto";
	item.style.paddingLeft = "3px";
	item.style.paddingRight = "3px";
	item.style.textAlign = this.align;
	item.style.MozUserSelect = "none";
	this.disableTextSelection(item);
	if (this.bgColor !== null) {
		item.style.backgroundColor = this.bgColor.getHTMLStyle();
	}
	return item;
};
draw2d.Label.prototype.isResizeable = function() {
	return false;
};
draw2d.Label.prototype.setWordwrap = function(flag) {
	this.html.style.whiteSpace = flag ? "wrap" : "nowrap";
};
draw2d.Label.prototype.setAlign = function(align) {
	this.align = align;
	this.html.style.textAlign = align;
};
draw2d.Label.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.bgColor !== null) {
		this.html.style.backgroundColor = this.bgColor.getHTMLStyle();
	} else {
		this.html.style.backgroundColor = "transparent";
	}
};
draw2d.Label.prototype.setColor = function(color) {
	this.color = color;
	this.html.style.color = this.color.getHTMLStyle();
};
draw2d.Label.prototype.setFontSize = function(size) {
	this.fontSize = size;
	this.html.style.fontSize = this.fontSize + "pt";
};
draw2d.Label.prototype.setDimension = function(w, h) {
};
draw2d.Label.prototype.getWidth = function() {
	if (window.getComputedStyle) {
		return parseInt(getComputedStyle(this.html, "").getPropertyValue(
				"width"));
	}
	return parseInt(this.html.clientWidth);
};
draw2d.Label.prototype.getHeight = function() {
	if (window.getComputedStyle) {
		return parseInt(getComputedStyle(this.html, "").getPropertyValue(
				"height"));
	}
	return parseInt(this.html.clientHeight);
};
draw2d.Label.prototype.getText = function() {
	return this.msg;
};
draw2d.Label.prototype.setText = function(text) {
	this.msg = text;
	this.html.removeChild(this.textNode);
	this.textNode = document.createTextNode(this.msg);
	this.html.appendChild(this.textNode);
};
draw2d.Label.prototype.setStyledText = function(text) {
	this.msg = text;
	this.html.removeChild(this.textNode);
	this.textNode = document.createElement("div");
	this.textNode.style.whiteSpace = "nowrap";
	this.textNode.innerHTML = text;
	this.html.appendChild(this.textNode);
};
draw2d.Oval = function() {
	draw2d.VectorFigure.call(this);
};
draw2d.Oval.prototype = new draw2d.VectorFigure();
draw2d.Oval.prototype.type = "draw2d.Oval";
draw2d.Oval.prototype.paint = function() {
	if (this.html === null) {
		return;
	}
	try {
		draw2d.VectorFigure.prototype.paint.call(this);
		this.graphics.setStroke(this.stroke);
		if (this.bgColor !== null) {
			this.graphics.setColor(this.bgColor.getHTMLStyle());
			this.graphics.fillOval(0, 0, this.getWidth() - 1,
					this.getHeight() - 1);
		}
		if (this.lineColor !== null) {
			this.graphics.setColor(this.lineColor.getHTMLStyle());
			this.graphics.drawOval(0, 0, this.getWidth() - 1,
					this.getHeight() - 1);
		}
		this.graphics.paint();
	} catch (e) {
		pushErrorStack(e, "draw2d.Oval.prototype.paint=function()");
	}
};
draw2d.Circle = function(_2608) {
	draw2d.Oval.call(this);
	if (_2608) {
		this.setDimension(_2608, _2608);
	}
};
draw2d.Circle.prototype = new draw2d.Oval();
draw2d.Circle.prototype.type = "draw2d.Circle";
draw2d.Circle.prototype.setDimension = function(w, h) {
	if (w > h) {
		draw2d.Oval.prototype.setDimension.call(this, w, w);
	} else {
		draw2d.Oval.prototype.setDimension.call(this, h, h);
	}
};
draw2d.Circle.prototype.isStrechable = function() {
	return false;
};
draw2d.Rectangle = function(width, _17a0) {
	this.bgColor = null;
	this.lineColor = new draw2d.Color(0, 0, 0);
	this.lineStroke = 1;
	draw2d.Figure.call(this);
	if (width && _17a0) {
		this.setDimension(width, _17a0);
	}
};
draw2d.Rectangle.prototype = new draw2d.Figure();
draw2d.Rectangle.prototype.type = "draw2d.Rectangle";
draw2d.Rectangle.prototype.dispose = function() {
	draw2d.Figure.prototype.dispose.call(this);
	this.bgColor = null;
	this.lineColor = null;
};
draw2d.Rectangle.prototype.createHTMLElement = function() {
	var item = draw2d.Figure.prototype.createHTMLElement.call(this);
	item.style.width = "auto";
	item.style.height = "auto";
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.style.border = this.lineStroke + "px solid "
			+ this.lineColor.getHTMLStyle();
	item.style.fontSize = "1px";
	item.style.lineHeight = "1px";
	item.innerHTML = "&nbsp";
	if (this.bgColor !== null) {
		item.style.backgroundColor = this.bgColor.getHTMLStyle();
	}
	return item;
};
draw2d.Rectangle.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.bgColor !== null) {
		this.html.style.backgroundColor = this.bgColor.getHTMLStyle();
	} else {
		this.html.style.backgroundColor = "transparent";
	}
};
draw2d.Rectangle.prototype.getBackgroundColor = function() {
	return this.bgColor;
};
draw2d.Rectangle.prototype.setColor = function(color) {
	this.lineColor = color;
	if (this.lineColor !== null) {
		this.html.style.border = this.lineStroke + "px solid "
				+ this.lineColor.getHTMLStyle();
	} else {
		this.html.style.border = this.lineStroke + "0px";
	}
};
draw2d.Rectangle.prototype.getColor = function() {
	return this.lineColor;
};
draw2d.Rectangle.prototype.getWidth = function() {
	return draw2d.Figure.prototype.getWidth.call(this) + 2 * this.lineStroke;
};
draw2d.Rectangle.prototype.getHeight = function() {
	return draw2d.Figure.prototype.getHeight.call(this) + 2 * this.lineStroke;
};
draw2d.Rectangle.prototype.setDimension = function(w, h) {
	draw2d.Figure.prototype.setDimension.call(this, w - 2 * this.lineStroke, h
			- 2 * this.lineStroke);
};
draw2d.Rectangle.prototype.setLineWidth = function(w) {
	var diff = w - this.lineStroke;
	this.setDimension(this.getWidth() - 2 * diff, this.getHeight() - 2 * diff);
	this.lineStroke = w;
	var c = "transparent";
	if (this.lineColor !== null) {
		c = this.lineColor.getHTMLStyle();
	}
	this.html.style.border = this.lineStroke + "px solid " + c;
};
draw2d.Rectangle.prototype.getLineWidth = function() {
	return this.lineStroke;
};
draw2d.ImageFigure = function(url) {
	if (url === undefined) {
		url = null;
	}
	this.url = url;
	draw2d.Node.call(this);
	this.setDimension(40, 40);
};
draw2d.ImageFigure.prototype = new draw2d.Node;
draw2d.ImageFigure.prototype.type = "draw2d.Image";
draw2d.ImageFigure.prototype.createHTMLElement = function() {
	var item = draw2d.Node.prototype.createHTMLElement.call(this);
	item.style.width = this.width + "px";
	item.style.height = this.height + "px";
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.style.border = "0px";
	if (this.url !== null) {
		item.style.backgroundImage = "url(" + this.url + ")";
	} else {
		item.style.backgroundImage = "";
	}
	return item;
};
draw2d.ImageFigure.prototype.setColor = function(color) {
};
draw2d.ImageFigure.prototype.isResizeable = function() {
	return false;
};
draw2d.ImageFigure.prototype.setImage = function(url) {
	if (url === undefined) {
		url = null;
	}
	this.url = url;
	if (this.url !== null) {
		this.html.style.backgroundImage = "url(" + this.url + ")";
	} else {
		this.html.style.backgroundImage = "";
	}
};
draw2d.Port = function(_172f, _1730) {
	Corona = function() {
	};
	Corona.prototype = new draw2d.Circle();
	Corona.prototype.setAlpha = function(_1731) {
		draw2d.Circle.prototype.setAlpha.call(this, Math.min(0.3, _1731));
		this.setDeleteable(false);
		this.setCanDrag(false);
		this.setResizeable(false);
		this.setSelectable(false);
	};
	if (_172f === null || _172f === undefined) {
		this.currentUIRepresentation = new draw2d.Circle();
	} else {
		this.currentUIRepresentation = _172f;
	}
	if (_1730 === null || _1730 === undefined) {
		this.connectedUIRepresentation = new draw2d.Circle();
		this.connectedUIRepresentation.setColor(null);
	} else {
		this.connectedUIRepresentation = _1730;
	}
	this.disconnectedUIRepresentation = this.currentUIRepresentation;
	this.hideIfConnected = false;
	this.uiRepresentationAdded = true;
	this.parentNode = null;
	this.originX = 0;
	this.originY = 0;
	this.coronaWidth = 10;
	this.corona = null;
	draw2d.Rectangle.call(this);
	this.setDimension(8, 8);
	this.setBackgroundColor(new draw2d.Color(100, 180, 100));
	this.setColor(new draw2d.Color(90, 150, 90));
	draw2d.Rectangle.prototype.setColor.call(this, null);
	this.dropable = new draw2d.DropTarget(this.html);
	this.dropable.node = this;
	this.dropable.addEventListener("dragenter", function(_1732) {
		_1732.target.node.onDragEnter(_1732.relatedTarget.node);
	});
	this.dropable.addEventListener("dragleave", function(_1733) {
		_1733.target.node.onDragLeave(_1733.relatedTarget.node);
	});
	this.dropable.addEventListener("drop", function(_1734) {
		_1734.relatedTarget.node.onDrop(_1734.target.node);
	});
};
draw2d.Port.prototype = new draw2d.Rectangle();
draw2d.Port.prototype.type = "draw2d.Port";
draw2d.Port.ZOrderBaseIndex = 5000;
draw2d.Port.setZOrderBaseIndex = function(index) {
	draw2d.Port.ZOrderBaseIndex = index;
};
draw2d.Port.prototype.setHideIfConnected = function(flag) {
	this.hideIfConnected = flag;
};
draw2d.Port.prototype.dispose = function() {
	var size = this.moveListener.getSize();
	for ( var i = 0; i < size; i++) {
		var _1739 = this.moveListener.get(i);
		this.parentNode.workflow.removeFigure(_1739);
		_1739.dispose();
	}
	draw2d.Rectangle.prototype.dispose.call(this);
	this.parentNode = null;
	this.dropable.node = null;
	this.dropable = null;
	this.disconnectedUIRepresentation.dispose();
	this.connectedUIRepresentation.dispose();
};
draw2d.Port.prototype.createHTMLElement = function() {
	var item = draw2d.Rectangle.prototype.createHTMLElement.call(this);
	item.style.zIndex = draw2d.Port.ZOrderBaseIndex;
	this.currentUIRepresentation.html.zIndex = draw2d.Port.ZOrderBaseIndex;
	item.appendChild(this.currentUIRepresentation.html);
	this.uiRepresentationAdded = true;
	return item;
};
draw2d.Port.prototype.setUiRepresentation = function(_173b) {
	if (_173b === null) {
		_173b = new draw2d.Figure();
	}
	if (this.uiRepresentationAdded) {
		this.html.removeChild(this.currentUIRepresentation.getHTMLElement());
	}
	this.html.appendChild(_173b.getHTMLElement());
	_173b.paint();
	this.currentUIRepresentation = _173b;
};
draw2d.Port.prototype.onMouseEnter = function() {
	this.setLineWidth(2);
};
draw2d.Port.prototype.onMouseLeave = function() {
	this.setLineWidth(0);
};
draw2d.Port.prototype.setDimension = function(width, _173d) {
	draw2d.Rectangle.prototype.setDimension.call(this, width, _173d);
	this.connectedUIRepresentation.setDimension(width, _173d);
	this.disconnectedUIRepresentation.setDimension(width, _173d);
	this.setPosition(this.x, this.y);
};
draw2d.Port.prototype.setBackgroundColor = function(color) {
	this.currentUIRepresentation.setBackgroundColor(color);
};
draw2d.Port.prototype.getBackgroundColor = function() {
	return this.currentUIRepresentation.getBackgroundColor();
};
draw2d.Port.prototype.getConnections = function() {
	var _173f = new draw2d.ArrayList();
	var size = this.moveListener.getSize();
	for ( var i = 0; i < size; i++) {
		var _1742 = this.moveListener.get(i);
		if (_1742 instanceof draw2d.Connection) {
			_173f.add(_1742);
		}
	}
	return _173f;
};
draw2d.Port.prototype.setColor = function(color) {
	this.currentUIRepresentation.setColor(color);
};
draw2d.Port.prototype.getColor = function() {
	return this.currentUIRepresentation.getColor();
};
draw2d.Port.prototype.setLineWidth = function(width) {
	this.currentUIRepresentation.setLineWidth(width);
};
draw2d.Port.prototype.getLineWidth = function() {
	return this.currentUIRepresentation.getLineWidth();
};
draw2d.Port.prototype.paint = function() {
	try {
		this.currentUIRepresentation.paint();
	} catch (e) {
		pushErrorStack(e, "draw2d.Port.prototype.paint=function()");
	}
};
draw2d.Port.prototype.setPosition = function(xPos, yPos) {
	this.originX = xPos;
	this.originY = yPos;
	draw2d.Rectangle.prototype.setPosition.call(this, xPos, yPos);
	if (this.html === null) {
		return;
	}
	this.html.style.left = (this.x - this.getWidth() / 2) + "px";
	this.html.style.top = (this.y - this.getHeight() / 2) + "px";
};
draw2d.Port.prototype.setParent = function(_1747) {
	if (this.parentNode !== null) {
		this.parentNode.detachMoveListener(this);
	}
	this.parentNode = _1747;
	if (this.parentNode !== null) {
		this.parentNode.attachMoveListener(this);
	}
};
draw2d.Port.prototype.attachMoveListener = function(_1748) {
	draw2d.Rectangle.prototype.attachMoveListener.call(this, _1748);
	if (this.hideIfConnected == true) {
		this.setUiRepresentation(this.connectedUIRepresentation);
	}
};
draw2d.Port.prototype.detachMoveListener = function(_1749) {
	draw2d.Rectangle.prototype.detachMoveListener.call(this, _1749);
	if (this.getConnections().getSize() == 0) {
		this.setUiRepresentation(this.disconnectedUIRepresentation);
	}
};
draw2d.Port.prototype.getParent = function() {
	return this.parentNode;
};
draw2d.Port.prototype.onDrag = function() {
	draw2d.Rectangle.prototype.onDrag.call(this);
	this.parentNode.workflow.showConnectionLine(this.parentNode.x + this.x,
			this.parentNode.y + this.y, this.parentNode.x + this.originX,
			this.parentNode.y + this.originY);
};
draw2d.Port.prototype.getCoronaWidth = function() {
	return this.coronaWidth;
};
draw2d.Port.prototype.setCoronaWidth = function(width) {
	this.coronaWidth = width;
};
draw2d.Port.prototype.setOrigin = function(x, y) {
	this.originX = x;
	this.originY = y;
};
draw2d.Port.prototype.onDragend = function() {
	this.setAlpha(1);
	this.setPosition(this.originX, this.originY);
	this.parentNode.workflow.hideConnectionLine();
	document.body.focus();
};
draw2d.Port.prototype.onDragEnter = function(port) {
	var _174e = new draw2d.EditPolicy(draw2d.EditPolicy.CONNECT);
	_174e.canvas = this.parentNode.workflow;
	_174e.source = port;
	_174e.target = this;
	var _174f = this.createCommand(_174e);
	if (_174f === null) {
		return;
	}
	this.parentNode.workflow.connectionLine
			.setColor(new draw2d.Color(0, 150, 0));
	this.parentNode.workflow.connectionLine.setLineWidth(3);
	this.showCorona(true);
};
draw2d.Port.prototype.onDragLeave = function(port) {
	this.parentNode.workflow.connectionLine.setColor(new draw2d.Color(0, 0, 0));
	this.parentNode.workflow.connectionLine.setLineWidth(1);
	this.showCorona(false);
};
draw2d.Port.prototype.onDrop = function(port) {
	var _1752 = new draw2d.EditPolicy(draw2d.EditPolicy.CONNECT);
	_1752.canvas = this.parentNode.workflow;
	_1752.source = port;
	_1752.target = this;
	var _1753 = this.createCommand(_1752);
	if (_1753 !== null) {
		this.parentNode.workflow.getCommandStack().execute(_1753);
	}
};
draw2d.Port.prototype.getAbsolutePosition = function() {
	return new draw2d.Point(this.getAbsoluteX(), this.getAbsoluteY());
};
draw2d.Port.prototype.getAbsoluteBounds = function() {
	return new draw2d.Dimension(this.getAbsoluteX(), this.getAbsoluteY(), this
			.getWidth(), this.getHeight());
};
draw2d.Port.prototype.getAbsoluteY = function() {
	return this.originY + this.parentNode.getY();
};
draw2d.Port.prototype.getAbsoluteX = function() {
	return this.originX + this.parentNode.getX();
};
draw2d.Port.prototype.onOtherFigureMoved = function(_1754) {
	this.fireMoveEvent();
};
draw2d.Port.prototype.getName = function() {
	return this.name;
};
draw2d.Port.prototype.setName = function(name) {
	this.name = name;
};
draw2d.Port.prototype.isOver = function(iX, iY) {
	var x = this.getAbsoluteX() - this.coronaWidth - this.getWidth() / 2;
	var y = this.getAbsoluteY() - this.coronaWidth - this.getHeight() / 2;
	var iX2 = x + this.width + (this.coronaWidth * 2);
	var iY2 = y + this.height + (this.coronaWidth * 2);
	return (iX >= x && iX <= iX2 && iY >= y && iY <= iY2);
};
draw2d.Port.prototype.showCorona = function(flag, _175d) {
	if (flag === true) {
		this.corona = new Corona();
		this.corona.setAlpha(0.3);
		this.corona.setBackgroundColor(new draw2d.Color(0, 125, 125));
		this.corona.setColor(null);
		this.corona.setDimension(this.getWidth() + (this.getCoronaWidth() * 2),
				this.getWidth() + (this.getCoronaWidth() * 2));
		this.parentNode.getWorkflow().addFigure(
				this.corona,
				this.getAbsoluteX() - this.getCoronaWidth() - this.getWidth()
						/ 2,
				this.getAbsoluteY() - this.getCoronaWidth() - this.getHeight()
						/ 2);
	} else {
		if (flag === false && this.corona !== null) {
			this.parentNode.getWorkflow().removeFigure(this.corona);
			this.corona = null;
		}
	}
};
draw2d.Port.prototype.createCommand = function(_175e) {
	if (_175e.getPolicy() === draw2d.EditPolicy.MOVE) {
		if (!this.canDrag) {
			return null;
		}
		return new draw2d.CommandMovePort(this);
	}
	if (_175e.getPolicy() === draw2d.EditPolicy.CONNECT) {
		if (_175e.source.parentNode.id === _175e.target.parentNode.id) {
			return null;
		} else {
			return new draw2d.CommandConnect(_175e.canvas, _175e.source,
					_175e.target);
		}
	}
	return null;
};
draw2d.InputPort = function(_2883) {
	draw2d.Port.call(this, _2883);
};
draw2d.InputPort.prototype = new draw2d.Port();
draw2d.InputPort.prototype.type = "draw2d.InputPort";
draw2d.InputPort.prototype.onDragstart = function(x, y) {
	if (!this.canDrag) {
		return false;
	}
	return true;
};
draw2d.InputPort.prototype.onDragEnter = function(port) {
	if (port instanceof draw2d.OutputPort) {
		draw2d.Port.prototype.onDragEnter.call(this, port);
	} else {
		if (port instanceof draw2d.LineStartResizeHandle) {
			var line = this.workflow.currentSelection;
			if (line instanceof draw2d.Connection
					&& line.getSource() instanceof draw2d.InputPort) {
				draw2d.Port.prototype.onDragEnter.call(this, line.getTarget());
			}
		} else {
			if (port instanceof draw2d.LineEndResizeHandle) {
				var line = this.workflow.currentSelection;
				if (line instanceof draw2d.Connection
						&& line.getTarget() instanceof draw2d.InputPort) {
					draw2d.Port.prototype.onDragEnter.call(this, line
							.getSource());
				}
			}
		}
	}
};
draw2d.InputPort.prototype.onDragLeave = function(port) {
	if (port instanceof draw2d.OutputPort) {
		draw2d.Port.prototype.onDragLeave.call(this, port);
	} else {
		if (port instanceof draw2d.LineStartResizeHandle) {
			var line = this.workflow.currentSelection;
			if (line instanceof draw2d.Connection
					&& line.getSource() instanceof draw2d.InputPort) {
				draw2d.Port.prototype.onDragLeave.call(this, line.getTarget());
			}
		} else {
			if (port instanceof draw2d.LineEndResizeHandle) {
				var line = this.workflow.currentSelection;
				if (line instanceof draw2d.Connection
						&& line.getTarget() instanceof draw2d.InputPort) {
					draw2d.Port.prototype.onDragLeave.call(this, line
							.getSource());
				}
			}
		}
	}
};
draw2d.InputPort.prototype.createCommand = function(_288a) {
	if (_288a.getPolicy() == draw2d.EditPolicy.CONNECT) {
		if (_288a.source.parentNode.id == _288a.target.parentNode.id) {
			return null;
		}
		if (_288a.source instanceof draw2d.OutputPort) {
			return new draw2d.CommandConnect(_288a.canvas, _288a.source,
					_288a.target);
		}
		return null;
	}
	return draw2d.Port.prototype.createCommand.call(this, _288a);
};
draw2d.OutputPort = function(_2960) {
	draw2d.Port.call(this, _2960);
	this.maxFanOut = 100;
};
draw2d.OutputPort.prototype = new draw2d.Port();
draw2d.OutputPort.prototype.type = "draw2d.OutputPort";
draw2d.OutputPort.prototype.onDragEnter = function(port) {
	if (this.getMaxFanOut() <= this.getFanOut()) {
		return;
	}
	if (port instanceof draw2d.InputPort) {
		draw2d.Port.prototype.onDragEnter.call(this, port);
	} else {
		if (port instanceof draw2d.LineStartResizeHandle) {
			var line = this.workflow.currentSelection;
			if (line instanceof draw2d.Connection
					&& line.getSource() instanceof draw2d.OutputPort) {
				draw2d.Port.prototype.onDragEnter.call(this, line.getTarget());
			}
		} else {
			if (port instanceof draw2d.LineEndResizeHandle) {
				var line = this.workflow.currentSelection;
				if (line instanceof draw2d.Connection
						&& line.getTarget() instanceof draw2d.OutputPort) {
					draw2d.Port.prototype.onDragEnter.call(this, line
							.getSource());
				}
			}
		}
	}
};
draw2d.OutputPort.prototype.onDragLeave = function(port) {
	if (port instanceof draw2d.InputPort) {
		draw2d.Port.prototype.onDragLeave.call(this, port);
	} else {
		if (port instanceof draw2d.LineStartResizeHandle) {
			var line = this.workflow.currentSelection;
			if (line instanceof draw2d.Connection
					&& line.getSource() instanceof draw2d.OutputPort) {
				draw2d.Port.prototype.onDragLeave.call(this, line.getTarget());
			}
		} else {
			if (port instanceof draw2d.LineEndResizeHandle) {
				var line = this.workflow.currentSelection;
				if (line instanceof draw2d.Connection
						&& line.getTarget() instanceof draw2d.OutputPort) {
					draw2d.Port.prototype.onDragLeave.call(this, line
							.getSource());
				}
			}
		}
	}
};
draw2d.OutputPort.prototype.onDragstart = function(x, y) {
	if (!this.canDrag) {
		return false;
	}
	if (this.maxFanOut === -1) {
		return true;
	}
	if (this.getMaxFanOut() <= this.getFanOut()) {
		return false;
	}
	return true;
};
draw2d.OutputPort.prototype.setMaxFanOut = function(count) {
	this.maxFanOut = count;
};
draw2d.OutputPort.prototype.getMaxFanOut = function() {
	return this.maxFanOut;
};
draw2d.OutputPort.prototype.getFanOut = function() {
	if (this.getParent().workflow === null) {
		return 0;
	}
	var count = 0;
	var lines = this.getParent().workflow.getLines();
	var size = lines.getSize();
	for ( var i = 0; i < size; i++) {
		var line = lines.get(i);
		if (line instanceof draw2d.Connection) {
			if (line.getSource() == this) {
				count++;
			} else {
				if (line.getTarget() == this) {
					count++;
				}
			}
		}
	}
	return count;
};
draw2d.OutputPort.prototype.createCommand = function(_296d) {
	if (_296d.getPolicy() === draw2d.EditPolicy.CONNECT) {
		if (_296d.source.parentNode.id === _296d.target.parentNode.id) {
			return null;
		}
		if (_296d.source instanceof draw2d.InputPort) {
			return new draw2d.CommandConnect(_296d.canvas, _296d.target,
					_296d.source);
		}
		return null;
	}
	return draw2d.Port.prototype.createCommand.call(this, _296d);
};
draw2d.Line = function() {
	this.lineColor = new draw2d.Color(0, 0, 0);
	this.stroke = 1;
	this.canvas = null;
	this.parent = null;
	this.workflow = null;
	this.html = null;
	this.graphics = null;
	this.id = draw2d.UUID.create();
	this.startX = 30;
	this.startY = 30;
	this.endX = 100;
	this.endY = 100;
	this.alpha = 1;
	this.isMoving = false;
	this.model = null;
	this.zOrder = draw2d.Line.ZOrderBaseIndex;
	this.corona = draw2d.Line.CoronaWidth;
	this.properties = {};
	this.moveListener = new draw2d.ArrayList();
	this.setSelectable(true);
	this.setDeleteable(true);
};
draw2d.Line.prototype.type = "draw2d.Line";
draw2d.Line.ZOrderBaseIndex = 200;
draw2d.Line.CoronaWidth = 5;
draw2d.Line.setZOrderBaseIndex = function(index) {
	draw2d.Line.ZOrderBaseIndex = index;
};
draw2d.Line.setDefaultCoronaWidth = function(width) {
	draw2d.Line.CoronaWidth = width;
};
draw2d.Line.prototype.dispose = function() {
	this.canvas = null;
	this.workflow = null;
	if (this.graphics !== null) {
		this.graphics.clear();
	}
	this.graphics = null;
};
draw2d.Line.prototype.getZOrder = function() {
	return this.zOrder;
};
draw2d.Line.prototype.setZOrder = function(index) {
	if (this.html !== null) {
		this.html.style.zIndex = index;
	}
	this.zOrder = index;
};
draw2d.Line.prototype.setCoronaWidth = function(width) {
	this.corona = width;
};
draw2d.Line.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.id = this.id;
	item.style.position = "absolute";
	item.style.left = "0px";
	item.style.top = "0px";
	item.style.height = "0px";
	item.style.width = "0px";
	item.style.zIndex = this.zOrder;
	return item;
};
draw2d.Line.prototype.setId = function(id) {
	this.id = id;
	if (this.html !== null) {
		this.html.id = id;
	}
};
draw2d.Line.prototype.getId = function() {
	return this.id;
};
draw2d.Line.prototype.getProperties = function() {
	return this.properties;
};
draw2d.Line.prototype.getProperty = function(key) {
	return this.properties[key];
};
draw2d.Line.prototype.setProperty = function(key, value) {
	this.properties[key] = value;
	this.setDocumentDirty();
};
draw2d.Line.prototype.getHTMLElement = function() {
	if (this.html === null) {
		this.html = this.createHTMLElement();
	}
	return this.html;
};
draw2d.Line.prototype.getWorkflow = function() {
	return this.workflow;
};
draw2d.Line.prototype.isResizeable = function() {
	return true;
};
draw2d.Line.prototype.setCanvas = function(_2925) {
	this.canvas = _2925;
	if (this.graphics !== null) {
		this.graphics.clear();
	}
	this.graphics = null;
};
draw2d.Line.prototype.setWorkflow = function(_2926) {
	this.workflow = _2926;
	if (this.graphics !== null) {
		this.graphics.clear();
	}
	this.graphics = null;
};
draw2d.Line.prototype.paint = function() {
	if (this.html === null) {
		return;
	}
	try {
		if (this.graphics === null) {
			this.graphics = new jsGraphics(this.html);
		} else {
			this.graphics.clear();
		}
		this.graphics.setStroke(this.stroke);
		this.graphics.setColor(this.lineColor.getHTMLStyle());
		this.graphics.drawLine(this.startX, this.startY, this.endX, this.endY);
		this.graphics.paint();
	} catch (e) {
		pushErrorStack(e, "draw2d.Line.prototype.paint=function()");
	}
};
draw2d.Line.prototype.attachMoveListener = function(_2927) {
	this.moveListener.add(_2927);
};
draw2d.Line.prototype.detachMoveListener = function(_2928) {
	this.moveListener.remove(_2928);
};
draw2d.Line.prototype.fireMoveEvent = function() {
	var size = this.moveListener.getSize();
	for ( var i = 0; i < size; i++) {
		this.moveListener.get(i).onOtherFigureMoved(this);
	}
};
draw2d.Line.prototype.onOtherFigureMoved = function(_292b) {
};
draw2d.Line.prototype.setLineWidth = function(w) {
	this.stroke = w;
	if (this.graphics !== null) {
		this.paint();
	}
	this.setDocumentDirty();
};
draw2d.Line.prototype.setColor = function(color) {
	this.lineColor = color;
	if (this.graphics !== null) {
		this.paint();
	}
	this.setDocumentDirty();
};
draw2d.Line.prototype.getColor = function() {
	return this.lineColor;
};
draw2d.Line.prototype.setAlpha = function(_292e) {
	if (_292e == this.alpha) {
		return;
	}
	try {
		this.html.style.MozOpacity = _292e;
	} catch (exc1) {
	}
	try {
		this.html.style.opacity = _292e;
	} catch (exc2) {
	}
	try {
		var _292f = Math.round(_292e * 100);
		if (_292f >= 99) {
			this.html.style.filter = "";
		} else {
			this.html.style.filter = "alpha(opacity=" + _292f + ")";
		}
	} catch (exc3) {
	}
	this.alpha = _292e;
};
draw2d.Line.prototype.setStartPoint = function(x, y) {
	this.startX = x;
	this.startY = y;
	if (this.graphics !== null) {
		this.paint();
	}
	this.setDocumentDirty();
};
draw2d.Line.prototype.setEndPoint = function(x, y) {
	this.endX = x;
	this.endY = y;
	if (this.graphics !== null) {
		this.paint();
	}
	this.setDocumentDirty();
};
draw2d.Line.prototype.getStartX = function() {
	return this.startX;
};
draw2d.Line.prototype.getStartY = function() {
	return this.startY;
};
draw2d.Line.prototype.getStartPoint = function() {
	return new draw2d.Point(this.startX, this.startY);
};
draw2d.Line.prototype.getEndX = function() {
	return this.endX;
};
draw2d.Line.prototype.getEndY = function() {
	return this.endY;
};
draw2d.Line.prototype.getEndPoint = function() {
	return new draw2d.Point(this.endX, this.endY);
};
draw2d.Line.prototype.isSelectable = function() {
	return this.selectable;
};
draw2d.Line.prototype.setSelectable = function(flag) {
	this.selectable = flag;
};
draw2d.Line.prototype.isDeleteable = function() {
	return this.deleteable;
};
draw2d.Line.prototype.setDeleteable = function(flag) {
	this.deleteable = flag;
};
draw2d.Line.prototype.getLength = function() {
	return Math.sqrt((this.startX - this.endX) * (this.startX - this.endX)
			+ (this.startY - this.endY) * (this.startY - this.endY));
};
draw2d.Line.prototype.getAngle = function() {
	var _2936 = this.getLength();
	var angle = -(180 / Math.PI) * Math.asin((this.startY - this.endY) / _2936);
	if (angle < 0) {
		if (this.endX < this.startX) {
			angle = Math.abs(angle) + 180;
		} else {
			angle = 360 - Math.abs(angle);
		}
	} else {
		if (this.endX < this.startX) {
			angle = 180 - angle;
		}
	}
	return angle;
};
draw2d.Line.prototype.createCommand = function(_2938) {
	if (_2938.getPolicy() == draw2d.EditPolicy.MOVE) {
		var x1 = this.getStartX();
		var y1 = this.getStartY();
		var x2 = this.getEndX();
		var y2 = this.getEndY();
		return new draw2d.CommandMoveLine(this, x1, y1, x2, y2);
	}
	if (_2938.getPolicy() == draw2d.EditPolicy.DELETE) {
		if (this.isDeleteable() == false) {
			return null;
		}
		return new draw2d.CommandDelete(this);
	}
	return null;
};
draw2d.Line.prototype.setModel = function(model) {
	if (this.model !== null) {
		this.model.removePropertyChangeListener(this);
	}
	this.model = model;
	if (this.model !== null) {
		this.model.addPropertyChangeListener(this);
	}
};
draw2d.Line.prototype.getModel = function() {
	return this.model;
};
draw2d.Line.prototype.onRemove = function(_293e) {
};
draw2d.Line.prototype.onContextMenu = function(x, y) {
	var menu = this.getContextMenu();
	if (menu !== null) {
		this.workflow.showMenu(menu, x, y);
	}
};
draw2d.Line.prototype.getContextMenu = function() {
	return null;
};
draw2d.Line.prototype.onDoubleClick = function() {
};
draw2d.Line.prototype.setDocumentDirty = function() {
	if (this.workflow != null) {
		this.workflow.setDocumentDirty();
	}
};
draw2d.Line.prototype.containsPoint = function(px, py) {
	return draw2d.Line.hit(this.corona, this.startX, this.startY, this.endX,
			this.endY, px, py);
};
draw2d.Line.hit = function(_2944, X1, Y1, X2, Y2, px, py) {
	X2 -= X1;
	Y2 -= Y1;
	px -= X1;
	py -= Y1;
	var _294b = px * X2 + py * Y2;
	var _294c;
	if (_294b <= 0) {
		_294c = 0;
	} else {
		px = X2 - px;
		py = Y2 - py;
		_294b = px * X2 + py * Y2;
		if (_294b <= 0) {
			_294c = 0;
		} else {
			_294c = _294b * _294b / (X2 * X2 + Y2 * Y2);
		}
	}
	var lenSq = px * px + py * py - _294c;
	if (lenSq < 0) {
		lenSq = 0;
	}
	return Math.sqrt(lenSq) < _2944;
};
draw2d.ConnectionRouter = function() {
};
draw2d.ConnectionRouter.prototype.type = "draw2d.ConnectionRouter";
draw2d.ConnectionRouter.prototype.getDirection = function(r, p) {
	var _205a = Math.abs(r.x - p.x);
	var _205b = 3;
	var i = Math.abs(r.y - p.y);
	if (i <= _205a) {
		_205a = i;
		_205b = 0;
	}
	i = Math.abs(r.getBottom() - p.y);
	if (i <= _205a) {
		_205a = i;
		_205b = 2;
	}
	i = Math.abs(r.getRight() - p.x);
	if (i < _205a) {
		_205a = i;
		_205b = 1;
	}
	return _205b;
};
draw2d.ConnectionRouter.prototype.getEndDirection = function(conn) {
	var p = conn.getEndPoint();
	var rect = conn.getTarget().getParent().getBounds();
	return this.getDirection(rect, p);
};
draw2d.ConnectionRouter.prototype.getStartDirection = function(conn) {
	var p = conn.getStartPoint();
	var rect = conn.getSource().getParent().getBounds();
	return this.getDirection(rect, p);
};
draw2d.ConnectionRouter.prototype.route = function(_2063) {
};
draw2d.NullConnectionRouter = function() {
};
draw2d.NullConnectionRouter.prototype = new draw2d.ConnectionRouter();
draw2d.NullConnectionRouter.prototype.type = "draw2d.NullConnectionRouter";
draw2d.NullConnectionRouter.prototype.invalidate = function() {
};
draw2d.NullConnectionRouter.prototype.route = function(_2805) {
	_2805.addPoint(_2805.getStartPoint());
	_2805.addPoint(_2805.getEndPoint());
};
draw2d.ManhattanConnectionRouter = function() {
	this.MINDIST = 20;
};
draw2d.ManhattanConnectionRouter.prototype = new draw2d.ConnectionRouter();
draw2d.ManhattanConnectionRouter.prototype.type = "draw2d.ManhattanConnectionRouter";
draw2d.ManhattanConnectionRouter.prototype.route = function(conn) {
	var _17aa = conn.getStartPoint();
	var _17ab = this.getStartDirection(conn);
	var toPt = conn.getEndPoint();
	var toDir = this.getEndDirection(conn);
	this._route(conn, toPt, toDir, _17aa, _17ab);
};
draw2d.ManhattanConnectionRouter.prototype._route = function(conn, _17af,
		_17b0, toPt, toDir) {
	var TOL = 0.1;
	var _17b4 = 0.01;
	var UP = 0;
	var RIGHT = 1;
	var DOWN = 2;
	var LEFT = 3;
	var xDiff = _17af.x - toPt.x;
	var yDiff = _17af.y - toPt.y;
	var point;
	var dir;
	if (((xDiff * xDiff) < (_17b4)) && ((yDiff * yDiff) < (_17b4))) {
		conn.addPoint(new draw2d.Point(toPt.x, toPt.y));
		return;
	}
	if (_17b0 == LEFT) {
		if ((xDiff > 0) && ((yDiff * yDiff) < TOL) && (toDir === RIGHT)) {
			point = toPt;
			dir = toDir;
		} else {
			if (xDiff < 0) {
				point = new draw2d.Point(_17af.x - this.MINDIST, _17af.y);
			} else {
				if (((yDiff > 0) && (toDir === DOWN))
						|| ((yDiff < 0) && (toDir == UP))) {
					point = new draw2d.Point(toPt.x, _17af.y);
				} else {
					if (_17b0 == toDir) {
						var pos = Math.min(_17af.x, toPt.x) - this.MINDIST;
						point = new draw2d.Point(pos, _17af.y);
					} else {
						point = new draw2d.Point(_17af.x - (xDiff / 2), _17af.y);
					}
				}
			}
			if (yDiff > 0) {
				dir = UP;
			} else {
				dir = DOWN;
			}
		}
	} else {
		if (_17b0 == RIGHT) {
			if ((xDiff < 0) && ((yDiff * yDiff) < TOL) && (toDir === LEFT)) {
				point = toPt;
				dir = toDir;
			} else {
				if (xDiff > 0) {
					point = new draw2d.Point(_17af.x + this.MINDIST, _17af.y);
				} else {
					if (((yDiff > 0) && (toDir === DOWN))
							|| ((yDiff < 0) && (toDir === UP))) {
						point = new draw2d.Point(toPt.x, _17af.y);
					} else {
						if (_17b0 == toDir) {
							var pos = Math.max(_17af.x, toPt.x) + this.MINDIST;
							point = new draw2d.Point(pos, _17af.y);
						} else {
							point = new draw2d.Point(_17af.x - (xDiff / 2),
									_17af.y);
						}
					}
				}
				if (yDiff > 0) {
					dir = UP;
				} else {
					dir = DOWN;
				}
			}
		} else {
			if (_17b0 == DOWN) {
				if (((xDiff * xDiff) < TOL) && (yDiff < 0) && (toDir == UP)) {
					point = toPt;
					dir = toDir;
				} else {
					if (yDiff > 0) {
						point = new draw2d.Point(_17af.x, _17af.y
								+ this.MINDIST);
					} else {
						if (((xDiff > 0) && (toDir === RIGHT))
								|| ((xDiff < 0) && (toDir === LEFT))) {
							point = new draw2d.Point(_17af.x, toPt.y);
						} else {
							if (_17b0 === toDir) {
								var pos = Math.max(_17af.y, toPt.y)
										+ this.MINDIST;
								point = new draw2d.Point(_17af.x, pos);
							} else {
								point = new draw2d.Point(_17af.x, _17af.y
										- (yDiff / 2));
							}
						}
					}
					if (xDiff > 0) {
						dir = LEFT;
					} else {
						dir = RIGHT;
					}
				}
			} else {
				if (_17b0 == UP) {
					if (((xDiff * xDiff) < TOL) && (yDiff > 0)
							&& (toDir === DOWN)) {
						point = toPt;
						dir = toDir;
					} else {
						if (yDiff < 0) {
							point = new draw2d.Point(_17af.x, _17af.y
									- this.MINDIST);
						} else {
							if (((xDiff > 0) && (toDir === RIGHT))
									|| ((xDiff < 0) && (toDir === LEFT))) {
								point = new draw2d.Point(_17af.x, toPt.y);
							} else {
								if (_17b0 === toDir) {
									var pos = Math.min(_17af.y, toPt.y)
											- this.MINDIST;
									point = new draw2d.Point(_17af.x, pos);
								} else {
									point = new draw2d.Point(_17af.x, _17af.y
											- (yDiff / 2));
								}
							}
						}
						if (xDiff > 0) {
							dir = LEFT;
						} else {
							dir = RIGHT;
						}
					}
				}
			}
		}
	}
	this._route(conn, point, dir, toPt, toDir);
	conn.addPoint(_17af);
};
draw2d.BezierConnectionRouter = function(_26b2) {
	if (!_26b2) {
		this.cheapRouter = new draw2d.ManhattanConnectionRouter();
	} else {
		this.cheapRouter = null;
	}
	this.iteration = 5;
};
draw2d.BezierConnectionRouter.prototype = new draw2d.ConnectionRouter();
draw2d.BezierConnectionRouter.prototype.type = "draw2d.BezierConnectionRouter";
draw2d.BezierConnectionRouter.prototype.drawBezier = function(_26b3, _26b4, t,
		iter) {
	var n = _26b3.length - 1;
	var q = [];
	var _26b9 = n + 1;
	for ( var i = 0; i < _26b9; i++) {
		q[i] = [];
		q[i][0] = _26b3[i];
	}
	for ( var j = 1; j <= n; j++) {
		for ( var i = 0; i <= (n - j); i++) {
			q[i][j] = new draw2d.Point((1 - t) * q[i][j - 1].x + t
					* q[i + 1][j - 1].x, (1 - t) * q[i][j - 1].y + t
					* q[i + 1][j - 1].y);
		}
	}
	var c1 = [];
	var c2 = [];
	for ( var i = 0; i < n + 1; i++) {
		c1[i] = q[0][i];
		c2[i] = q[i][n - i];
	}
	if (iter >= 0) {
		this.drawBezier(c1, _26b4, t, --iter);
		this.drawBezier(c2, _26b4, t, --iter);
	} else {
		for ( var i = 0; i < n; i++) {
			_26b4.push(q[i][n - i]);
		}
	}
};
draw2d.BezierConnectionRouter.prototype.route = function(conn) {
	if (this.cheapRouter !== null
			&& (conn.getSource().getParent().isMoving === true || conn
					.getTarget().getParent().isMoving === true)) {
		this.cheapRouter.route(conn);
		return;
	}
	var _26bf = [];
	var _26c0 = conn.getStartPoint();
	var toPt = conn.getEndPoint();
	this._route(_26bf, conn, toPt, this.getEndDirection(conn), _26c0, this
			.getStartDirection(conn));
	var _26c2 = [];
	this.drawBezier(_26bf, _26c2, 0.5, this.iteration);
	for ( var i = 0; i < _26c2.length; i++) {
		conn.addPoint(_26c2[i]);
	}
	conn.addPoint(toPt);
};
draw2d.BezierConnectionRouter.prototype._route = function(_26c4, conn, _26c6,
		_26c7, toPt, toDir) {
	var TOL = 0.1;
	var _26cb = 0.01;
	var _26cc = 90;
	var UP = 0;
	var RIGHT = 1;
	var DOWN = 2;
	var LEFT = 3;
	var xDiff = _26c6.x - toPt.x;
	var yDiff = _26c6.y - toPt.y;
	var point;
	var dir;
	if (((xDiff * xDiff) < (_26cb)) && ((yDiff * yDiff) < (_26cb))) {
		_26c4.push(new draw2d.Point(toPt.x, toPt.y));
		return;
	}
	if (_26c7 === LEFT) {
		if ((xDiff > 0) && ((yDiff * yDiff) < TOL) && (toDir === RIGHT)) {
			point = toPt;
			dir = toDir;
		} else {
			if (xDiff < 0) {
				point = new draw2d.Point(_26c6.x - _26cc, _26c6.y);
			} else {
				if (((yDiff > 0) && (toDir === DOWN))
						|| ((yDiff < 0) && (toDir === UP))) {
					point = new draw2d.Point(toPt.x, _26c6.y);
				} else {
					if (_26c7 === toDir) {
						var pos = Math.min(_26c6.x, toPt.x) - _26cc;
						point = new draw2d.Point(pos, _26c6.y);
					} else {
						point = new draw2d.Point(_26c6.x - (xDiff / 2), _26c6.y);
					}
				}
			}
			if (yDiff > 0) {
				dir = UP;
			} else {
				dir = DOWN;
			}
		}
	} else {
		if (_26c7 === RIGHT) {
			if ((xDiff < 0) && ((yDiff * yDiff) < TOL) && (toDir == LEFT)) {
				point = toPt;
				dir = toDir;
			} else {
				if (xDiff > 0) {
					point = new draw2d.Point(_26c6.x + _26cc, _26c6.y);
				} else {
					if (((yDiff > 0) && (toDir === DOWN))
							|| ((yDiff < 0) && (toDir === UP))) {
						point = new draw2d.Point(toPt.x, _26c6.y);
					} else {
						if (_26c7 === toDir) {
							var pos = Math.max(_26c6.x, toPt.x) + _26cc;
							point = new draw2d.Point(pos, _26c6.y);
						} else {
							point = new draw2d.Point(_26c6.x - (xDiff / 2),
									_26c6.y);
						}
					}
				}
				if (yDiff > 0) {
					dir = UP;
				} else {
					dir = DOWN;
				}
			}
		} else {
			if (_26c7 === DOWN) {
				if (((xDiff * xDiff) < TOL) && (yDiff < 0) && (toDir === UP)) {
					point = toPt;
					dir = toDir;
				} else {
					if (yDiff > 0) {
						point = new draw2d.Point(_26c6.x, _26c6.y + _26cc);
					} else {
						if (((xDiff > 0) && (toDir === RIGHT))
								|| ((xDiff < 0) && (toDir === LEFT))) {
							point = new draw2d.Point(_26c6.x, toPt.y);
						} else {
							if (_26c7 === toDir) {
								var pos = Math.max(_26c6.y, toPt.y) + _26cc;
								point = new draw2d.Point(_26c6.x, pos);
							} else {
								point = new draw2d.Point(_26c6.x, _26c6.y
										- (yDiff / 2));
							}
						}
					}
					if (xDiff > 0) {
						dir = LEFT;
					} else {
						dir = RIGHT;
					}
				}
			} else {
				if (_26c7 === UP) {
					if (((xDiff * xDiff) < TOL) && (yDiff > 0)
							&& (toDir === DOWN)) {
						point = toPt;
						dir = toDir;
					} else {
						if (yDiff < 0) {
							point = new draw2d.Point(_26c6.x, _26c6.y - _26cc);
						} else {
							if (((xDiff > 0) && (toDir === RIGHT))
									|| ((xDiff < 0) && (toDir === LEFT))) {
								point = new draw2d.Point(_26c6.x, toPt.y);
							} else {
								if (_26c7 === toDir) {
									var pos = Math.min(_26c6.y, toPt.y) - _26cc;
									point = new draw2d.Point(_26c6.x, pos);
								} else {
									point = new draw2d.Point(_26c6.x, _26c6.y
											- (yDiff / 2));
								}
							}
						}
						if (xDiff > 0) {
							dir = LEFT;
						} else {
							dir = RIGHT;
						}
					}
				}
			}
		}
	}
	this._route(_26c4, conn, point, dir, toPt, toDir);
	_26c4.push(_26c6);
};
draw2d.FanConnectionRouter = function() {
};
draw2d.FanConnectionRouter.prototype = new draw2d.NullConnectionRouter();
draw2d.FanConnectionRouter.prototype.type = "draw2d.FanConnectionRouter";
draw2d.FanConnectionRouter.prototype.route = function(conn) {
	var _1612 = conn.getStartPoint();
	var toPt = conn.getEndPoint();
	var lines = conn.getSource().getConnections();
	var _1615 = new draw2d.ArrayList();
	var index = 0;
	for ( var i = 0; i < lines.getSize(); i++) {
		var _1618 = lines.get(i);
		if (_1618.getTarget() == conn.getTarget()
				|| _1618.getSource() == conn.getTarget()) {
			_1615.add(_1618);
			if (conn == _1618) {
				index = _1615.getSize();
			}
		}
	}
	if (_1615.getSize() > 1) {
		this.routeCollision(conn, index);
	} else {
		draw2d.NullConnectionRouter.prototype.route.call(this, conn);
	}
};
draw2d.FanConnectionRouter.prototype.routeNormal = function(conn) {
	conn.addPoint(conn.getStartPoint());
	conn.addPoint(conn.getEndPoint());
};
draw2d.FanConnectionRouter.prototype.routeCollision = function(conn, index) {
	var start = conn.getStartPoint();
	var end = conn.getEndPoint();
	conn.addPoint(start);
	var _161e = 10;
	var _161f = new draw2d.Point((end.x + start.x) / 2, (end.y + start.y) / 2);
	var _1620 = end.getPosition(start);
	var ray;
	if (_1620 == draw2d.PositionConstants.SOUTH
			|| _1620 == draw2d.PositionConstants.EAST) {
		ray = new draw2d.Point(end.x - start.x, end.y - start.y);
	} else {
		ray = new draw2d.Point(start.x - end.x, start.y - end.y);
	}
	var _1622 = Math.sqrt(ray.x * ray.x + ray.y * ray.y);
	var _1623 = _161e * ray.x / _1622;
	var _1624 = _161e * ray.y / _1622;
	var _1625;
	if (index % 2 === 0) {
		_1625 = new draw2d.Point(_161f.x + (index / 2) * (-1 * _1624), _161f.y
				+ (index / 2) * _1623);
	} else {
		_1625 = new draw2d.Point(_161f.x + (index / 2) * _1624, _161f.y
				+ (index / 2) * (-1 * _1623));
	}
	conn.addPoint(_1625);
	conn.addPoint(end);
};
draw2d.Graphics = function(_25a2, _25a3, _25a4) {
	this.jsGraphics = _25a2;
	this.xt = _25a4.x;
	this.yt = _25a4.y;
	this.radian = _25a3 * Math.PI / 180;
	this.sinRadian = Math.sin(this.radian);
	this.cosRadian = Math.cos(this.radian);
};
draw2d.Graphics.prototype.setStroke = function(x) {
	this.jsGraphics.setStroke(x);
};
draw2d.Graphics.prototype.drawLine = function(x1, y1, x2, y2) {
	var _x1 = this.xt + x1 * this.cosRadian - y1 * this.sinRadian;
	var _y1 = this.yt + x1 * this.sinRadian + y1 * this.cosRadian;
	var _x2 = this.xt + x2 * this.cosRadian - y2 * this.sinRadian;
	var _y2 = this.yt + x2 * this.sinRadian + y2 * this.cosRadian;
	this.jsGraphics.drawLine(_x1, _y1, _x2, _y2);
};
draw2d.Graphics.prototype.fillRect = function(x, y, w, h) {
	var x1 = this.xt + x * this.cosRadian - y * this.sinRadian;
	var y1 = this.yt + x * this.sinRadian + y * this.cosRadian;
	var x2 = this.xt + (x + w) * this.cosRadian - y * this.sinRadian;
	var y2 = this.yt + (x + w) * this.sinRadian + y * this.cosRadian;
	var x3 = this.xt + (x + w) * this.cosRadian - (y + h) * this.sinRadian;
	var y3 = this.yt + (x + w) * this.sinRadian + (y + h) * this.cosRadian;
	var x4 = this.xt + x * this.cosRadian - (y + h) * this.sinRadian;
	var y4 = this.yt + x * this.sinRadian + (y + h) * this.cosRadian;
	this.jsGraphics.fillPolygon([ x1, x2, x3, x4 ], [ y1, y2, y3, y4 ]);
};
draw2d.Graphics.prototype.fillPolygon = function(_25ba, _25bb) {
	var rotX = [];
	var rotY = [];
	for ( var i = 0; i < _25ba.length; i++) {
		rotX[i] = this.xt + _25ba[i] * this.cosRadian - _25bb[i]
				* this.sinRadian;
		rotY[i] = this.yt + _25ba[i] * this.sinRadian + _25bb[i]
				* this.cosRadian;
	}
	this.jsGraphics.fillPolygon(rotX, rotY);
};
draw2d.Graphics.prototype.setColor = function(color) {
	this.jsGraphics.setColor(color.getHTMLStyle());
};
draw2d.Graphics.prototype.drawPolygon = function(_25c0, _25c1) {
	var rotX = [];
	var rotY = [];
	for ( var i = 0; i < _25c0.length; i++) {
		rotX[i] = this.xt + _25c0[i] * this.cosRadian - _25c1[i]
				* this.sinRadian;
		rotY[i] = this.yt + _25c0[i] * this.sinRadian + _25c1[i]
				* this.cosRadian;
	}
	this.jsGraphics.drawPolygon(rotX, rotY);
};
draw2d.Connection = function() {
	draw2d.Line.call(this);
	this.sourcePort = null;
	this.targetPort = null;
	this.canDrag = true;
	this.sourceDecorator = null;
	this.targetDecorator = null;
	this.sourceAnchor = new draw2d.ConnectionAnchor();
	this.targetAnchor = new draw2d.ConnectionAnchor();
	this.router = draw2d.Connection.defaultRouter;
	this.lineSegments = new draw2d.ArrayList();
	this.children = new draw2d.ArrayList();
	this.setColor(new draw2d.Color(0, 0, 115));
	this.setLineWidth(1);
};
draw2d.Connection.prototype = new draw2d.Line();
draw2d.Connection.prototype.type = "draw2d.Connection";
draw2d.Connection.defaultRouter = new draw2d.ManhattanConnectionRouter();
draw2d.Connection.setDefaultRouter = function(_20b9) {
	draw2d.Connection.defaultRouter = _20b9;
};
draw2d.Connection.prototype.disconnect = function() {
	if (this.sourcePort !== null) {
		this.sourcePort.detachMoveListener(this);
		this.fireSourcePortRouteEvent();
	}
	if (this.targetPort !== null) {
		this.targetPort.detachMoveListener(this);
		this.fireTargetPortRouteEvent();
	}
};
draw2d.Connection.prototype.reconnect = function() {
	if (this.sourcePort !== null) {
		this.sourcePort.attachMoveListener(this);
		this.fireSourcePortRouteEvent();
	}
	if (this.targetPort !== null) {
		this.targetPort.attachMoveListener(this);
		this.fireTargetPortRouteEvent();
	}
};
draw2d.Connection.prototype.isResizeable = function() {
	return this.getCanDrag();
};
draw2d.Connection.prototype.setCanDrag = function(flag) {
	this.canDrag = flag;
};
draw2d.Connection.prototype.getCanDrag = function() {
	return this.canDrag;
};
draw2d.Connection.prototype.addFigure = function(_20bb, _20bc) {
	var entry = {};
	entry.figure = _20bb;
	entry.locator = _20bc;
	this.children.add(entry);
	if (this.graphics !== null) {
		this.paint();
	}
	var oThis = this;
	var _20bf = function() {
		var _20c0 = arguments[0] || window.event;
		_20c0.returnValue = false;
		oThis.getWorkflow().setCurrentSelection(oThis);
		oThis.getWorkflow().showLineResizeHandles(oThis);
	};
	if (_20bb.getHTMLElement().addEventListener) {
		_20bb.getHTMLElement().addEventListener("mousedown", _20bf, false);
	} else {
		if (_20bb.getHTMLElement().attachEvent) {
			_20bb.getHTMLElement().attachEvent("onmousedown", _20bf);
		}
	}
};
draw2d.Connection.prototype.setSourceDecorator = function(_20c1) {
	this.sourceDecorator = _20c1;
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.Connection.prototype.getSourceDecorator = function() {
	return this.sourceDecorator;
};
draw2d.Connection.prototype.setTargetDecorator = function(_20c2) {
	this.targetDecorator = _20c2;
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.Connection.prototype.getTargetDecorator = function() {
	return this.targetDecorator;
};
draw2d.Connection.prototype.setSourceAnchor = function(_20c3) {
	this.sourceAnchor = _20c3;
	this.sourceAnchor.setOwner(this.sourcePort);
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.Connection.prototype.setTargetAnchor = function(_20c4) {
	this.targetAnchor = _20c4;
	this.targetAnchor.setOwner(this.targetPort);
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.Connection.prototype.setRouter = function(_20c5) {
	if (_20c5 !== null) {
		this.router = _20c5;
	} else {
		this.router = new draw2d.NullConnectionRouter();
	}
	if (this.graphics !== null) {
		this.paint();
	}
};
draw2d.Connection.prototype.getRouter = function() {
	return this.router;
};
draw2d.Connection.prototype.setWorkflow = function(_20c6) {
	draw2d.Line.prototype.setWorkflow.call(this, _20c6);
	for ( var i = 0; i < this.children.getSize(); i++) {
		this.children.get(i).isAppended = false;
	}
};
draw2d.Connection.prototype.paint = function() {
	if (this.html === null) {
		return;
	}
	try {
		for ( var i = 0; i < this.children.getSize(); i++) {
			var entry = this.children.get(i);
			if (entry.isAppended == true) {
				this.html.removeChild(entry.figure.getHTMLElement());
			}
			entry.isAppended = false;
		}
		if (this.graphics === null) {
			this.graphics = new jsGraphics(this.html);
		} else {
			this.graphics.clear();
		}
		this.graphics.setStroke(this.stroke);
		this.graphics.setColor(this.lineColor.getHTMLStyle());
		this.startStroke();
		this.router.route(this);
		if (this.getSource().getParent().isMoving == false
				&& this.getTarget().getParent().isMoving == false) {
			if (this.targetDecorator !== null) {
				this.targetDecorator.paint(new draw2d.Graphics(this.graphics,
						this.getEndAngle(), this.getEndPoint()));
			}
			if (this.sourceDecorator !== null) {
				this.sourceDecorator.paint(new draw2d.Graphics(this.graphics,
						this.getStartAngle(), this.getStartPoint()));
			}
		}
		this.finishStroke();
		for ( var i = 0; i < this.children.getSize(); i++) {
			var entry = this.children.get(i);
			this.html.appendChild(entry.figure.getHTMLElement());
			entry.isAppended = true;
			entry.locator.relocate(entry.figure);
		}
	} catch (e) {
		pushErrorStack(e, "draw2d.Connection.prototype.paint=function()");
	}
};
draw2d.Connection.prototype.getStartPoint = function() {
	if (this.isMoving == false) {
		return this.sourceAnchor.getLocation(this.targetAnchor
				.getReferencePoint());
	} else {
		return draw2d.Line.prototype.getStartPoint.call(this);
	}
};
draw2d.Connection.prototype.getEndPoint = function() {
	if (this.isMoving == false) {
		return this.targetAnchor.getLocation(this.sourceAnchor
				.getReferencePoint());
	} else {
		return draw2d.Line.prototype.getEndPoint.call(this);
	}
};
draw2d.Connection.prototype.startStroke = function() {
	this.oldPoint = null;
	this.lineSegments = new draw2d.ArrayList();
};
draw2d.Connection.prototype.finishStroke = function() {
	this.graphics.paint();
	this.oldPoint = null;
};
draw2d.Connection.prototype.getPoints = function() {
	var _20ca = new draw2d.ArrayList();
	var line = null;
	for ( var i = 0; i < this.lineSegments.getSize(); i++) {
		line = this.lineSegments.get(i);
		_20ca.add(line.start);
	}
	if (line !== null) {
		_20ca.add(line.end);
	}
	return _20ca;
};
draw2d.Connection.prototype.addPoint = function(p) {
	p = new draw2d.Point(parseInt(p.x), parseInt(p.y));
	if (this.oldPoint !== null) {
		this.graphics.drawLine(this.oldPoint.x, this.oldPoint.y, p.x, p.y);
		var line = {};
		line.start = this.oldPoint;
		line.end = p;
		this.lineSegments.add(line);
	}
	this.oldPoint = {};
	this.oldPoint.x = p.x;
	this.oldPoint.y = p.y;
};
draw2d.Connection.prototype.refreshSourcePort = function() {
	var model = this.getModel().getSourceModel();
	var _20d0 = this.getModel().getSourcePortName();
	var _20d1 = this.getWorkflow().getDocument().getFigures();
	var count = _20d1.getSize();
	for ( var i = 0; i < count; i++) {
		var _20d4 = _20d1.get(i);
		if (_20d4.getModel() == model) {
			var port = _20d4.getOutputPort(_20d0);
			this.setSource(port);
		}
	}
	this.setRouter(this.getRouter());
};
draw2d.Connection.prototype.refreshTargetPort = function() {
	var model = this.getModel().getTargetModel();
	var _20d7 = this.getModel().getTargetPortName();
	var _20d8 = this.getWorkflow().getDocument().getFigures();
	var count = _20d8.getSize();
	for ( var i = 0; i < count; i++) {
		var _20db = _20d8.get(i);
		if (_20db.getModel() == model) {
			var port = _20db.getInputPort(_20d7);
			this.setTarget(port);
		}
	}
	this.setRouter(this.getRouter());
};
draw2d.Connection.prototype.setSource = function(port) {
	if (this.sourcePort !== null) {
		this.sourcePort.detachMoveListener(this);
	}
	this.sourcePort = port;
	if (this.sourcePort === null) {
		return;
	}
	this.sourceAnchor.setOwner(this.sourcePort);
	this.fireSourcePortRouteEvent();
	this.sourcePort.attachMoveListener(this);
	this.setStartPoint(port.getAbsoluteX(), port.getAbsoluteY());
};
draw2d.Connection.prototype.getSource = function() {
	return this.sourcePort;
};
draw2d.Connection.prototype.setTarget = function(port) {
	if (this.targetPort !== null) {
		this.targetPort.detachMoveListener(this);
	}
	this.targetPort = port;
	if (this.targetPort === null) {
		return;
	}
	this.targetAnchor.setOwner(this.targetPort);
	this.fireTargetPortRouteEvent();
	this.targetPort.attachMoveListener(this);
	this.setEndPoint(port.getAbsoluteX(), port.getAbsoluteY());
};
draw2d.Connection.prototype.getTarget = function() {
	return this.targetPort;
};
draw2d.Connection.prototype.onOtherFigureMoved = function(_20df) {
	if (_20df == this.sourcePort) {
		this.setStartPoint(this.sourcePort.getAbsoluteX(), this.sourcePort
				.getAbsoluteY());
	} else {
		this.setEndPoint(this.targetPort.getAbsoluteX(), this.targetPort
				.getAbsoluteY());
	}
};
draw2d.Connection.prototype.containsPoint = function(px, py) {
	for ( var i = 0; i < this.lineSegments.getSize(); i++) {
		var line = this.lineSegments.get(i);
		if (draw2d.Line.hit(this.corona, line.start.x, line.start.y,
				line.end.x, line.end.y, px, py)) {
			return true;
		}
	}
	return false;
};
draw2d.Connection.prototype.getStartAngle = function() {
	var p1 = this.lineSegments.get(0).start;
	var p2 = this.lineSegments.get(0).end;
	if (this.router instanceof draw2d.BezierConnectionRouter) {
		p2 = this.lineSegments.get(5).end;
	}
	var _20e6 = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y)
			* (p1.y - p2.y));
	var angle = -(180 / Math.PI) * Math.asin((p1.y - p2.y) / _20e6);
	if (angle < 0) {
		if (p2.x < p1.x) {
			angle = Math.abs(angle) + 180;
		} else {
			angle = 360 - Math.abs(angle);
		}
	} else {
		if (p2.x < p1.x) {
			angle = 180 - angle;
		}
	}
	return angle;
};
draw2d.Connection.prototype.getEndAngle = function() {
	if (this.lineSegments.getSize() === 0) {
		return 90;
	}
	var p1 = this.lineSegments.get(this.lineSegments.getSize() - 1).end;
	var p2 = this.lineSegments.get(this.lineSegments.getSize() - 1).start;
	if (this.router instanceof draw2d.BezierConnectionRouter) {
		p2 = this.lineSegments.get(this.lineSegments.getSize() - 5).end;
	}
	var _20ea = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y)
			* (p1.y - p2.y));
	var angle = -(180 / Math.PI) * Math.asin((p1.y - p2.y) / _20ea);
	if (angle < 0) {
		if (p2.x < p1.x) {
			angle = Math.abs(angle) + 180;
		} else {
			angle = 360 - Math.abs(angle);
		}
	} else {
		if (p2.x < p1.x) {
			angle = 180 - angle;
		}
	}
	return angle;
};
draw2d.Connection.prototype.fireSourcePortRouteEvent = function() {
	var _20ec = this.sourcePort.getConnections();
	for ( var i = 0; i < _20ec.getSize(); i++) {
		_20ec.get(i).paint();
	}
};
draw2d.Connection.prototype.fireTargetPortRouteEvent = function() {
	var _20ee = this.targetPort.getConnections();
	for ( var i = 0; i < _20ee.getSize(); i++) {
		_20ee.get(i).paint();
	}
};
draw2d.Connection.prototype.createCommand = function(_20f0) {
	if (_20f0.getPolicy() == draw2d.EditPolicy.MOVE) {
		return new draw2d.CommandReconnect(this);
	}
	if (_20f0.getPolicy() == draw2d.EditPolicy.DELETE) {
		if (this.isDeleteable() == true) {
			return new draw2d.CommandDelete(this);
		}
		return null;
	}
	return null;
};
draw2d.ConnectionAnchor = function(owner) {
	this.owner = owner;
};
draw2d.ConnectionAnchor.prototype.type = "draw2d.ConnectionAnchor";
draw2d.ConnectionAnchor.prototype.getLocation = function(_2861) {
	return this.getReferencePoint();
};
draw2d.ConnectionAnchor.prototype.getOwner = function() {
	return this.owner;
};
draw2d.ConnectionAnchor.prototype.setOwner = function(owner) {
	this.owner = owner;
};
draw2d.ConnectionAnchor.prototype.getBox = function() {
	return this.getOwner().getAbsoluteBounds();
};
draw2d.ConnectionAnchor.prototype.getReferencePoint = function() {
	if (this.getOwner() === null) {
		return null;
	} else {
		return this.getOwner().getAbsolutePosition();
	}
};
draw2d.ChopboxConnectionAnchor = function(owner) {
	draw2d.ConnectionAnchor.call(this, owner);
};
draw2d.ChopboxConnectionAnchor.prototype = new draw2d.ConnectionAnchor();
draw2d.ChopboxConnectionAnchor.prototype.type = "draw2d.ChopboxConnectionAnchor";
draw2d.ChopboxConnectionAnchor.prototype.getLocation = function(_210d) {
	var r = new draw2d.Dimension();
	r.setBounds(this.getBox());
	r.translate(-1, -1);
	r.resize(1, 1);
	var _210f = r.x + r.w / 2;
	var _2110 = r.y + r.h / 2;
	if (r.isEmpty() || (_210d.x == _210f && _210d.y == _2110)) {
		return new Point(_210f, _2110);
	}
	var dx = _210d.x - _210f;
	var dy = _210d.y - _2110;
	var scale = 0.5 / Math.max(Math.abs(dx) / r.w, Math.abs(dy) / r.h);
	dx *= scale;
	dy *= scale;
	_210f += dx;
	_2110 += dy;
	return new draw2d.Point(Math.round(_210f), Math.round(_2110));
};
draw2d.ChopboxConnectionAnchor.prototype.getBox = function() {
	return this.getOwner().getParent().getBounds();
};
draw2d.ChopboxConnectionAnchor.prototype.getReferencePoint = function() {
	return this.getBox().getCenter();
};
draw2d.ConnectionDecorator = function() {
	this.color = new draw2d.Color(0, 0, 0);
	this.backgroundColor = new draw2d.Color(250, 250, 250);
};
draw2d.ConnectionDecorator.prototype.type = "draw2d.ConnectionDecorator";
draw2d.ConnectionDecorator.prototype.paint = function(g) {
};
draw2d.ConnectionDecorator.prototype.setColor = function(c) {
	this.color = c;
};
draw2d.ConnectionDecorator.prototype.setBackgroundColor = function(c) {
	this.backgroundColor = c;
};
draw2d.ArrowConnectionDecorator = function(_209f, width) {
	draw2d.ConnectionDecorator.call(this);
	if (_209f === undefined || _209f < 1) {
		this.lenght = 15;
	}
	if (width === undefined || width < 1) {
		this.width = 10;
	}
};
draw2d.ArrowConnectionDecorator.prototype = new draw2d.ConnectionDecorator();
draw2d.ArrowConnectionDecorator.prototype.type = "draw2d.ArrowConnectionDecorator";
draw2d.ArrowConnectionDecorator.prototype.paint = function(g) {
	if (this.backgroundColor !== null) {
		g.setColor(this.backgroundColor);
		g.fillPolygon([ 3, this.lenght, this.lenght, 3 ], [ 0,
				(this.width / 2), -(this.width / 2), 0 ]);
	}
	g.setColor(this.color);
	g.setStroke(1);
	g.drawPolygon([ 3, this.lenght, this.lenght, 3 ], [ 0, (this.width / 2),
			-(this.width / 2), 0 ]);
};
draw2d.ArrowConnectionDecorator.prototype.setDimension = function(l, width) {
	this.width = w;
	this.lenght = l;
};
draw2d.CompartmentFigure = function() {
	draw2d.Node.call(this);
	this.children = new draw2d.ArrayList();
	this.setBorder(new draw2d.LineBorder(1));
	this.dropable = new draw2d.DropTarget(this.html);
	this.dropable.node = this;
	this.dropable.addEventListener("figureenter", function(_15d9) {
		_15d9.target.node.onFigureEnter(_15d9.relatedTarget.node);
	});
	this.dropable.addEventListener("figureleave", function(_15da) {
		_15da.target.node.onFigureLeave(_15da.relatedTarget.node);
	});
	this.dropable.addEventListener("figuredrop", function(_15db) {
		_15db.target.node.onFigureDrop(_15db.relatedTarget.node);
	});
};
draw2d.CompartmentFigure.prototype = new draw2d.Node();
draw2d.CompartmentFigure.prototype.type = "draw2d.CompartmentFigure";
draw2d.CompartmentFigure.prototype.onFigureEnter = function(_15dc) {
};
draw2d.CompartmentFigure.prototype.onFigureLeave = function(_15dd) {
};
draw2d.CompartmentFigure.prototype.onFigureDrop = function(_15de) {
};
draw2d.CompartmentFigure.prototype.getChildren = function() {
	return this.children;
};
draw2d.CompartmentFigure.prototype.addChild = function(_15df) {
	_15df.setZOrder(this.getZOrder() + 1);
	_15df.setParent(this);
	this.children.add(_15df);
};
draw2d.CompartmentFigure.prototype.removeChild = function(_15e0) {
	_15e0.setParent(null);
	this.children.remove(_15e0);
};
draw2d.CompartmentFigure.prototype.setZOrder = function(index) {
	draw2d.Node.prototype.setZOrder.call(this, index);
	for ( var i = 0; i < this.children.getSize(); i++) {
		this.children.get(i).setZOrder(index + 1);
	}
};
draw2d.CompartmentFigure.prototype.setPosition = function(xPos, yPos) {
	var oldX = this.getX();
	var oldY = this.getY();
	draw2d.Node.prototype.setPosition.call(this, xPos, yPos);
	for ( var i = 0; i < this.children.getSize(); i++) {
		var child = this.children.get(i);
		child.setPosition(child.getX() + this.getX() - oldX, child.getY()
				+ this.getY() - oldY);
	}
};
draw2d.CompartmentFigure.prototype.onDrag = function() {
	var oldX = this.getX();
	var oldY = this.getY();
	draw2d.Node.prototype.onDrag.call(this);
	for ( var i = 0; i < this.children.getSize(); i++) {
		var child = this.children.get(i);
		child.setPosition(child.getX() + this.getX() - oldX, child.getY()
				+ this.getY() - oldY);
	}
};
draw2d.CanvasDocument = function(_2c11) {
	this.canvas = _2c11;
};
draw2d.CanvasDocument.prototype.type = "draw2d.CanvasDocument";
draw2d.CanvasDocument.prototype.getFigures = function() {
	var _2c12 = new draw2d.ArrayList();
	var _2c13 = this.canvas.figures;
	var _2c14 = this.canvas.dialogs;
	for ( var i = 0; i < _2c13.getSize(); i++) {
		var _2c16 = _2c13.get(i);
		if (_2c14.indexOf(_2c16) == -1 && _2c16.getParent() === null
				&& !(_2c16 instanceof draw2d.WindowFigure)) {
			_2c12.add(_2c16);
		}
	}
	return _2c12;
};
draw2d.CanvasDocument.prototype.getFigure = function(id) {
	return this.canvas.getFigure(id);
};
draw2d.CanvasDocument.prototype.getLines = function() {
	return this.canvas.getLines();
};
draw2d.CanvasDocument.prototype.getLine = function(id) {
	return this.canvas.getLine(id);
};
draw2d.Annotation = function(msg) {
	this.msg = msg;
	this.alpha = 1;
	this.color = new draw2d.Color(0, 0, 0);
	this.bgColor = new draw2d.Color(241, 241, 121);
	this.fontSize = 10;
	this.textNode = null;
	draw2d.Figure.call(this);
};
draw2d.Annotation.prototype = new draw2d.Figure();
draw2d.Annotation.prototype.type = "draw2d.Annotation";
draw2d.Annotation.prototype.createHTMLElement = function() {
	var item = draw2d.Figure.prototype.createHTMLElement.call(this);
	item.style.color = this.color.getHTMLStyle();
	item.style.backgroundColor = this.bgColor.getHTMLStyle();
	item.style.fontSize = this.fontSize + "pt";
	item.style.width = "auto";
	item.style.height = "auto";
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.onselectstart = function() {
		return false;
	};
	item.unselectable = "on";
	item.style.cursor = "default";
	this.textNode = document.createTextNode(this.msg);
	item.appendChild(this.textNode);
	this.disableTextSelection(item);
	return item;
};
draw2d.Annotation.prototype.onDoubleClick = function() {
	var _288f = new draw2d.AnnotationDialog(this);
	this.workflow.showDialog(_288f);
};
draw2d.Annotation.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.bgColor !== null) {
		this.html.style.backgroundColor = this.bgColor.getHTMLStyle();
	} else {
		this.html.style.backgroundColor = "transparent";
	}
};
draw2d.Annotation.prototype.getBackgroundColor = function() {
	return this.bgColor;
};
draw2d.Annotation.prototype.setFontSize = function(size) {
	this.fontSize = size;
	this.html.style.fontSize = this.fontSize + "pt";
};
draw2d.Annotation.prototype.getText = function() {
	return this.msg;
};
draw2d.Annotation.prototype.setText = function(text) {
	this.msg = text;
	this.html.removeChild(this.textNode);
	this.textNode = document.createTextNode(this.msg);
	this.html.appendChild(this.textNode);
};
draw2d.Annotation.prototype.setStyledText = function(text) {
	this.msg = text;
	this.html.removeChild(this.textNode);
	this.textNode = document.createElement("div");
	this.textNode.innerHTML = text;
	this.html.appendChild(this.textNode);
};
draw2d.ResizeHandle = function(_2a62, type) {
	draw2d.Rectangle.call(this, 5, 5);
	this.type = type;
	var _2a64 = this.getWidth();
	var _2a65 = _2a64 / 2;
	switch (this.type) {
	case 1:
		this.setSnapToGridAnchor(new draw2d.Point(_2a64, _2a64));
		break;
	case 2:
		this.setSnapToGridAnchor(new draw2d.Point(_2a65, _2a64));
		break;
	case 3:
		this.setSnapToGridAnchor(new draw2d.Point(0, _2a64));
		break;
	case 4:
		this.setSnapToGridAnchor(new draw2d.Point(0, _2a65));
		break;
	case 5:
		this.setSnapToGridAnchor(new draw2d.Point(0, 0));
		break;
	case 6:
		this.setSnapToGridAnchor(new draw2d.Point(_2a65, 0));
		break;
	case 7:
		this.setSnapToGridAnchor(new draw2d.Point(_2a64, 0));
		break;
	case 8:
		this.setSnapToGridAnchor(new draw2d.Point(_2a64, _2a65));
	case 9:
		this.setSnapToGridAnchor(new draw2d.Point(_2a65, _2a65));
		break;
	}
	this.setBackgroundColor(new draw2d.Color(0, 255, 0));
	this.setWorkflow(_2a62);
	this.setZOrder(10000);
};
draw2d.ResizeHandle.prototype = new draw2d.Rectangle();
draw2d.ResizeHandle.prototype.type = "draw2d.ResizeHandle";
draw2d.ResizeHandle.prototype.getSnapToDirection = function() {
	switch (this.type) {
	case 1:
		return draw2d.SnapToHelper.NORTH_WEST;
	case 2:
		return draw2d.SnapToHelper.NORTH;
	case 3:
		return draw2d.SnapToHelper.NORTH_EAST;
	case 4:
		return draw2d.SnapToHelper.EAST;
	case 5:
		return draw2d.SnapToHelper.SOUTH_EAST;
	case 6:
		return draw2d.SnapToHelper.SOUTH;
	case 7:
		return draw2d.SnapToHelper.SOUTH_WEST;
	case 8:
		return draw2d.SnapToHelper.WEST;
	case 9:
		return draw2d.SnapToHelper.CENTER;
	}
};
draw2d.ResizeHandle.prototype.onDragend = function() {
	var _2a66 = this.workflow.currentSelection;
	if (this.commandMove !== null) {
		this.commandMove.setPosition(_2a66.getX(), _2a66.getY());
		this.workflow.getCommandStack().execute(this.commandMove);
		this.commandMove = null;
	}
	if (this.commandResize !== null) {
		this.commandResize.setDimension(_2a66.getWidth(), _2a66.getHeight());
		this.workflow.getCommandStack().execute(this.commandResize);
		this.commandResize = null;
	}
	this.workflow.hideSnapToHelperLines();
};
draw2d.ResizeHandle.prototype.setPosition = function(xPos, yPos) {
	this.x = xPos;
	this.y = yPos;
	if (this.html === null) {
		return;
	}
	this.html.style.left = this.x + "px";
	this.html.style.top = this.y + "px";
};
draw2d.ResizeHandle.prototype.onDragstart = function(x, y) {
	if (!this.canDrag) {
		return false;
	}
	var _2a6b = this.workflow.currentSelection;
	this.commandMove = _2a6b.createCommand(new draw2d.EditPolicy(
			draw2d.EditPolicy.MOVE));
	this.commandResize = _2a6b.createCommand(new draw2d.EditPolicy(
			draw2d.EditPolicy.RESIZE));
	return true;
};
draw2d.ResizeHandle.prototype.onDrag = function() {
	var oldX = this.getX();
	var oldY = this.getY();
	draw2d.Rectangle.prototype.onDrag.call(this);
	var diffX = oldX - this.getX();
	var diffY = oldY - this.getY();
	var _2a70 = this.workflow.currentSelection.getX();
	var _2a71 = this.workflow.currentSelection.getY();
	var _2a72 = this.workflow.currentSelection.getWidth();
	var _2a73 = this.workflow.currentSelection.getHeight();
	switch (this.type) {
	case 1:
		this.workflow.currentSelection
				.setPosition(_2a70 - diffX, _2a71 - diffY);
		this.workflow.currentSelection.setDimension(_2a72 + diffX, _2a73
				+ diffY);
		break;
	case 2:
		this.workflow.currentSelection.setPosition(_2a70, _2a71 - diffY);
		this.workflow.currentSelection.setDimension(_2a72, _2a73 + diffY);
		break;
	case 3:
		this.workflow.currentSelection.setPosition(_2a70, _2a71 - diffY);
		this.workflow.currentSelection.setDimension(_2a72 - diffX, _2a73
				+ diffY);
		break;
	case 4:
		this.workflow.currentSelection.setPosition(_2a70, _2a71);
		this.workflow.currentSelection.setDimension(_2a72 - diffX, _2a73);
		break;
	case 5:
		this.workflow.currentSelection.setPosition(_2a70, _2a71);
		this.workflow.currentSelection.setDimension(_2a72 - diffX, _2a73
				- diffY);
		break;
	case 6:
		this.workflow.currentSelection.setPosition(_2a70, _2a71);
		this.workflow.currentSelection.setDimension(_2a72, _2a73 - diffY);
		break;
	case 7:
		this.workflow.currentSelection.setPosition(_2a70 - diffX, _2a71);
		this.workflow.currentSelection.setDimension(_2a72 + diffX, _2a73
				- diffY);
		break;
	case 8:
		this.workflow.currentSelection.setPosition(_2a70 - diffX, _2a71);
		this.workflow.currentSelection.setDimension(_2a72 + diffX, _2a73);
		break;
	}
	this.workflow.moveResizeHandles(this.workflow.getCurrentSelection());
};
draw2d.ResizeHandle.prototype.setCanDrag = function(flag) {
	draw2d.Rectangle.prototype.setCanDrag.call(this, flag);
	if (this.html === null) {
		return;
	}
	if (!flag) {
		this.html.style.cursor = "";
		return;
	}
	switch (this.type) {
	case 1:
		this.html.style.cursor = "nw-resize";
		break;
	case 2:
		this.html.style.cursor = "s-resize";
		break;
	case 3:
		this.html.style.cursor = "ne-resize";
		break;
	case 4:
		this.html.style.cursor = "w-resize";
		break;
	case 5:
		this.html.style.cursor = "se-resize";
		break;
	case 6:
		this.html.style.cursor = "n-resize";
		break;
	case 7:
		this.html.style.cursor = "sw-resize";
		break;
	case 8:
		this.html.style.cursor = "e-resize";
		break;
	case 9:
		this.html.style.cursor = "resize";
		break;
	}
};
draw2d.ResizeHandle.prototype.onKeyDown = function(_2a75, ctrl) {
	this.workflow.onKeyDown(_2a75, ctrl);
};
draw2d.ResizeHandle.prototype.fireMoveEvent = function() {
};
draw2d.LineStartResizeHandle = function(_2855) {
	draw2d.ResizeHandle.call(this, _2855, 9);
	this.setDimension(10, 10);
	this.setBackgroundColor(new draw2d.Color(100, 255, 0));
	this.setZOrder(10000);
};
draw2d.LineStartResizeHandle.prototype = new draw2d.ResizeHandle();
draw2d.LineStartResizeHandle.prototype.type = "draw2d.LineStartResizeHandle";
draw2d.LineStartResizeHandle.prototype.onDragend = function() {
	if (this.workflow.currentSelection instanceof draw2d.Connection) {
		if (this.command !== null) {
			this.command.cancel();
		}
	} else {
		if (this.command !== null) {
			this.getWorkflow().getCommandStack().execute(this.command);
		}
	}
	this.command = null;
};
draw2d.LineStartResizeHandle.prototype.onDragstart = function(x, y) {
	if (!this.canDrag) {
		return false;
	}
	this.command = this.workflow.currentSelection
			.createCommand(new draw2d.EditPolicy(draw2d.EditPolicy.MOVE));
	return this.command !== null;
};
draw2d.LineStartResizeHandle.prototype.onDrag = function() {
	var oldX = this.getX();
	var oldY = this.getY();
	draw2d.Rectangle.prototype.onDrag.call(this);
	var diffX = oldX - this.getX();
	var diffY = oldY - this.getY();
	var _285c = this.workflow.currentSelection.getStartPoint();
	var line = this.workflow.currentSelection;
	line.setStartPoint(_285c.x - diffX, _285c.y - diffY);
	line.isMoving = true;
};
draw2d.LineStartResizeHandle.prototype.onDrop = function(_285e) {
	var line = this.workflow.currentSelection;
	line.isMoving = false;
	if (line instanceof draw2d.Connection) {
		this.command.setNewPorts(_285e, line.getTarget());
		this.getWorkflow().getCommandStack().execute(this.command);
	}
	this.command = null;
};
draw2d.LineEndResizeHandle = function(_1724) {
	draw2d.ResizeHandle.call(this, _1724, 9);
	this.setDimension(10, 10);
	this.setBackgroundColor(new draw2d.Color(0, 255, 0));
	this.setZOrder(10000);
};
draw2d.LineEndResizeHandle.prototype = new draw2d.ResizeHandle();
draw2d.LineEndResizeHandle.prototype.type = "draw2d.LineEndResizeHandle";
draw2d.LineEndResizeHandle.prototype.onDragend = function() {
	if (this.workflow.currentSelection instanceof draw2d.Connection) {
		if (this.command !== null) {
			this.command.cancel();
		}
	} else {
		if (this.command !== null) {
			this.workflow.getCommandStack().execute(this.command);
		}
	}
	this.command = null;
};
draw2d.LineEndResizeHandle.prototype.onDragstart = function(x, y) {
	if (!this.canDrag) {
		return false;
	}
	this.command = this.workflow.currentSelection
			.createCommand(new draw2d.EditPolicy(draw2d.EditPolicy.MOVE));
	return this.command !== null;
};
draw2d.LineEndResizeHandle.prototype.onDrag = function() {
	var oldX = this.getX();
	var oldY = this.getY();
	draw2d.Rectangle.prototype.onDrag.call(this);
	var diffX = oldX - this.getX();
	var diffY = oldY - this.getY();
	var _172b = this.workflow.currentSelection.getEndPoint();
	var line = this.workflow.currentSelection;
	line.setEndPoint(_172b.x - diffX, _172b.y - diffY);
	line.isMoving = true;
};
draw2d.LineEndResizeHandle.prototype.onDrop = function(_172d) {
	var line = this.workflow.currentSelection;
	line.isMoving = false;
	if (line instanceof draw2d.Connection) {
		this.command.setNewPorts(line.getSource(), _172d);
		this.getWorkflow().getCommandStack().execute(this.command);
	}
	this.command = null;
};
draw2d.Canvas = function(_2ba6) {
	try {
		if (_2ba6) {
			this.construct(_2ba6);
		}
		this.enableSmoothFigureHandling = false;
		this.canvasLines = new draw2d.ArrayList();
	} catch (e) {
		pushErrorStack(e, "draw2d.Canvas=function(/*:String*/id)");
	}
};
draw2d.Canvas.IMAGE_BASE_URL = "";
draw2d.Canvas.prototype.type = "draw2d.Canvas";
draw2d.Canvas.prototype.construct = function(_2ba7) {
	this.canvasId = _2ba7;
	this.html = document.getElementById(this.canvasId);
	this.scrollArea = document.body.parentNode;
};
draw2d.Canvas.prototype.setViewPort = function(divId) {
	this.scrollArea = document.getElementById(divId);
};
draw2d.Canvas.prototype.addFigure = function(_2ba9, xPos, yPos, _2bac) {
	try {
		if (this.enableSmoothFigureHandling === true) {
			if (_2ba9.timer <= 0) {
				_2ba9.setAlpha(0.001);
			}
			var _2bad = _2ba9;
			var _2bae = function() {
				if (_2bad.alpha < 1) {
					_2bad.setAlpha(Math.min(1, _2bad.alpha + 0.05));
				} else {
					window.clearInterval(_2bad.timer);
					_2bad.timer = -1;
				}
			};
			if (_2bad.timer > 0) {
				window.clearInterval(_2bad.timer);
			}
			_2bad.timer = window.setInterval(_2bae, 30);
		}
		_2ba9.setCanvas(this);
		if (xPos && yPos) {
			_2ba9.setPosition(xPos, yPos);
		}
		if (_2ba9 instanceof draw2d.Line) {
			this.canvasLines.add(_2ba9);
			this.html.appendChild(_2ba9.getHTMLElement());
		} else {
			var obj = this.canvasLines.getFirstElement();
			if (obj === null) {
				this.html.appendChild(_2ba9.getHTMLElement());
			} else {
				this.html.insertBefore(_2ba9.getHTMLElement(), obj
						.getHTMLElement());
			}
		}
		if (!_2bac) {
			_2ba9.paint();
		}
	} catch (e) {
		pushErrorStack(
				e,
				"draw2d.Canvas.prototype.addFigure= function( /*:draw2d.Figure*/figure,/*:int*/ xPos,/*:int*/ yPos, /*:boolean*/ avoidPaint)");
	}
};
draw2d.Canvas.prototype.removeFigure = function(_2bb0) {
	if (this.enableSmoothFigureHandling === true) {
		var oThis = this;
		var _2bb2 = _2bb0;
		var _2bb3 = function() {
			if (_2bb2.alpha > 0) {
				_2bb2.setAlpha(Math.max(0, _2bb2.alpha - 0.05));
			} else {
				window.clearInterval(_2bb2.timer);
				_2bb2.timer = -1;
				oThis.html.removeChild(_2bb2.html);
				_2bb2.setCanvas(null);
			}
		};
		if (_2bb2.timer > 0) {
			window.clearInterval(_2bb2.timer);
		}
		_2bb2.timer = window.setInterval(_2bb3, 20);
	} else {
		this.html.removeChild(_2bb0.html);
		_2bb0.setCanvas(null);
	}
	if (_2bb0 instanceof draw2d.Line) {
		this.canvasLines.remove(_2bb0);
	}
};
draw2d.Canvas.prototype.getEnableSmoothFigureHandling = function() {
	return this.enableSmoothFigureHandling;
};
draw2d.Canvas.prototype.setEnableSmoothFigureHandling = function(flag) {
	this.enableSmoothFigureHandling = flag;
};
draw2d.Canvas.prototype.getWidth = function() {
	return parseInt(this.html.style.width);
};
draw2d.Canvas.prototype.setWidth = function(width) {
	if (this.scrollArea !== null) {
		this.scrollArea.style.width = width + "px";
	} else {
		this.html.style.width = width + "px";
	}
};
draw2d.Canvas.prototype.getHeight = function() {
	return parseInt(this.html.style.height);
};
draw2d.Canvas.prototype.setHeight = function(_2bb6) {
	if (this.scrollArea !== null) {
		this.scrollArea.style.height = _2bb6 + "px";
	} else {
		this.html.style.height = _2bb6 + "px";
	}
};
draw2d.Canvas.prototype.setBackgroundImage = function(_2bb7, _2bb8) {
	if (_2bb7 !== null) {
		if (_2bb8) {
			this.html.style.background = "transparent url(" + _2bb7 + ") ";
		} else {
			this.html.style.background = "transparent url(" + _2bb7
					+ ") no-repeat";
		}
	} else {
		this.html.style.background = "transparent";
	}
};
draw2d.Canvas.prototype.getY = function() {
	return this.y;
};
draw2d.Canvas.prototype.getX = function() {
	return this.x;
};
draw2d.Canvas.prototype.getAbsoluteY = function() {
	var el = this.html;
	var ot = el.offsetTop;
	while ((el = el.offsetParent) !== null) {
		ot += el.offsetTop;
	}
	return ot;
};
draw2d.Canvas.prototype.getAbsoluteX = function() {
	var el = this.html;
	var ol = el.offsetLeft;
	while ((el = el.offsetParent) !== null) {
		ol += el.offsetLeft;
	}
	return ol;
};
draw2d.Canvas.prototype.getScrollLeft = function() {
	var scrollLeft = 0;
	try{
		scrollLeft = this.scrollArea.scrollLeft;
	}
	catch(err){}
	return scrollLeft;
};
draw2d.Canvas.prototype.getScrollTop = function() {
	var scrollTop = 0;
	try{
		scrollTop = this.scrollArea.scrollTop;
	}
	catch(err){}
	return scrollTop;
};

draw2d.Workflow = function(id) {
	try {
		if (!id) {
			return;
		}
		this.isIPad = navigator.userAgent.match(/iPad/i) != null;
		this.menu = null;
		this.gridWidthX = 10;
		this.gridWidthY = 10;
		this.snapToGridHelper = null;
		this.verticalSnapToHelperLine = null;
		this.horizontalSnapToHelperLine = null;
		this.snapToGeometryHelper = null;
		this.figures = new draw2d.ArrayList();
		this.lines = new draw2d.ArrayList();
		this.commonPorts = new draw2d.ArrayList();
		this.dropTargets = new draw2d.ArrayList();
		this.compartments = new draw2d.ArrayList();
		this.selectionListeners = new draw2d.ArrayList();
		this.dialogs = new draw2d.ArrayList();
		this.toolPalette = null;
		this.dragging = false;
		this.tooltip = null;
		this.draggingLine = null;
		this.draggingLineCommand = null;
		this.commandStack = new draw2d.CommandStack();
		this.oldScrollPosLeft = 0;
		this.oldScrollPosTop = 0;
		this.currentSelection = null;
		this.currentMenu = null;
		this.connectionLine = new draw2d.Line();
		this.resizeHandleStart = new draw2d.LineStartResizeHandle(this);
		this.resizeHandleEnd = new draw2d.LineEndResizeHandle(this);
		this.resizeHandle1 = new draw2d.ResizeHandle(this, 1);
		this.resizeHandle2 = new draw2d.ResizeHandle(this, 2);
		this.resizeHandle3 = new draw2d.ResizeHandle(this, 3);
		this.resizeHandle4 = new draw2d.ResizeHandle(this, 4);
		this.resizeHandle5 = new draw2d.ResizeHandle(this, 5);
		this.resizeHandle6 = new draw2d.ResizeHandle(this, 6);
		this.resizeHandle7 = new draw2d.ResizeHandle(this, 7);
		this.resizeHandle8 = new draw2d.ResizeHandle(this, 8);
		this.resizeHandleHalfWidth = parseInt(this.resizeHandle2.getWidth() / 2);
		draw2d.Canvas.call(this, id);
		this.setPanning(this.isIPad);
		if (this.html !== null) {
			this.html.style.backgroundImage = "url(grid_10.png)";
			this.html.className = "Workflow";
			oThis = this;
			this.html.tabIndex = "0";
			var _26f3 = function() {
				var _26f4 = arguments[0] || window.event;
				_26f4.cancelBubble = true;
				_26f4.returnValue = false;
				_26f4.stopped = true;
				var diffX = _26f4.clientX;
				var diffY = _26f4.clientY;
				var _26f7 = oThis.getScrollLeft();
				var _26f8 = oThis.getScrollTop();
				var _26f9 = oThis.getAbsoluteX();
				var _26fa = oThis.getAbsoluteY();
				var line = oThis.getBestLine(diffX + _26f7 - _26f9, diffY
						+ _26f8 - _26fa, null);
				if (line !== null) {
					line.onContextMenu(diffX + _26f7 - _26f9, diffY + _26f8
							- _26fa);
				} else {
					oThis.onContextMenu(diffX + _26f7 - _26f9, diffY + _26f8
							- _26fa);
				}
			};
			this.html.oncontextmenu = function() {
				return false;
			};
			var oThis = this;
			var _26fd = function(event) {
				var ctrl = event.ctrlKey;
				oThis.onKeyDown(event.keyCode, ctrl);
			};
			var _2700 = function() {
				var _2701 = arguments[0] || window.event;
				if (_2701.returnValue == false) {
					return;
				}
				var diffX = _2701.clientX;
				var diffY = _2701.clientY;
				var _2704 = oThis.getScrollLeft();
				var _2705 = oThis.getScrollTop();
				var _2706 = oThis.getAbsoluteX();
				var _2707 = oThis.getAbsoluteY();
				oThis.onMouseDown(diffX + _2704 - _2706, diffY + _2705 - _2707);
			};
			var _2708 = function(e) {
				var _270a = e.touches.item(0);
				var diffX = _270a.clientX;
				var diffY = _270a.clientY;
				var _270d = oThis.getScrollLeft();
				var _270e = oThis.getScrollTop();
				var _270f = oThis.getAbsoluteX();
				var _2710 = oThis.getAbsoluteY();
				oThis.onMouseDown(diffX + _270d - _270f, diffY + _270e - _2710);
				e.preventDefault();
			};
			var _2711 = function() {
				var _2712 = arguments[0] || window.event;
				if (oThis.currentMenu !== null) {
					oThis.removeFigure(oThis.currentMenu);
					oThis.currentMenu = null;
				}
				if (_2712.button == 2) {
					return;
				}
				var diffX = _2712.clientX;
				var diffY = _2712.clientY;
				var _2715 = oThis.getScrollLeft();
				var _2716 = oThis.getScrollTop();
				var _2717 = oThis.getAbsoluteX();
				var _2718 = oThis.getAbsoluteY();
				oThis.onMouseUp(diffX + _2715 - _2717, diffY + _2716 - _2718);
			};
			var _2719 = function(e) {
				var _271b = e.touches.item(0);
				var diffX = _271b.clientX;
				var diffY = _271b.clientY;
				var _271e = oThis.getScrollLeft();
				var _271f = oThis.getScrollTop();
				var _2720 = oThis.getAbsoluteX();
				var _2721 = oThis.getAbsoluteY();
				oThis.currentMouseX = diffX + _271e - _2720;
				oThis.currentMouseY = diffY + _271f - _2721;
				var obj = oThis.getBestFigure(oThis.currentMouseX,
						oThis.currentMouseY);
				if (draw2d.Drag.currentHover !== null && obj === null) {
					var _2723 = new draw2d.DragDropEvent();
					_2723.initDragDropEvent("mouseleave", false, oThis);
					draw2d.Drag.currentHover.dispatchEvent(_2723);
				} else {
					var diffX = _271b.clientX;
					var diffY = _271b.clientY;
					var _271e = oThis.getScrollLeft();
					var _271f = oThis.getScrollTop();
					var _2720 = oThis.getAbsoluteX();
					var _2721 = oThis.getAbsoluteY();
					oThis.onMouseMove(diffX + _271e - _2720, diffY + _271f
							- _2721);
				}
				if (obj === null) {
					draw2d.Drag.currentHover = null;
				}
				e.preventDefault();
			};
			var _2724 = function() {
				var _2725 = arguments[0] || window.event;
				var diffX = _2725.clientX;
				var diffY = _2725.clientY;
				var _2728 = oThis.getScrollLeft();
				var _2729 = oThis.getScrollTop();
				var _272a = oThis.getAbsoluteX();
				var _272b = oThis.getAbsoluteY();
				oThis.currentMouseX = diffX + _2728 - _272a;
				oThis.currentMouseY = diffY + _2729 - _272b;
				var obj = oThis.getBestFigure(oThis.currentMouseX,
						oThis.currentMouseY);
				if (draw2d.Drag.currentHover !== null && obj === null) {
					var _272d = new draw2d.DragDropEvent();
					_272d.initDragDropEvent("mouseleave", false, oThis);
					draw2d.Drag.currentHover.dispatchEvent(_272d);
				} else {
					var diffX = _2725.clientX;
					var diffY = _2725.clientY;
					var _2728 = oThis.getScrollLeft();
					var _2729 = oThis.getScrollTop();
					var _272a = oThis.getAbsoluteX();
					var _272b = oThis.getAbsoluteY();
					oThis.onMouseMove(diffX + _2728 - _272a, diffY + _2729
							- _272b);
				}
				if (obj === null) {
					draw2d.Drag.currentHover = null;
				}
				if (oThis.tooltip !== null) {
					if (Math.abs(oThis.currentTooltipX - oThis.currentMouseX) > 10
							|| Math.abs(oThis.currentTooltipY
									- oThis.currentMouseY) > 10) {
						oThis.showTooltip(null);
					}
				}
			};
			var _272e = function(_272f) {
				var _272f = arguments[0] || window.event;
				var diffX = _272f.clientX;
				var diffY = _272f.clientY;
				var _2732 = oThis.getScrollLeft();
				var _2733 = oThis.getScrollTop();
				var _2734 = oThis.getAbsoluteX();
				var _2735 = oThis.getAbsoluteY();
				var line = oThis.getBestLine(diffX + _2732 - _2734, diffY
						+ _2733 - _2735, null);
				if (line !== null) {
					line.onDoubleClick();
				}
			};
			if (this.html.addEventListener) {
				this.html.addEventListener("contextmenu", _26f3, false);
				this.html.addEventListener("touchstart", _2708, false);
				this.html.addEventListener("touchmove", _2719, false);
				this.html.addEventListener("mousemove", _2724, false);
				this.html.addEventListener("mouseup", _2711, false);
				this.html.addEventListener("mousedown", _2700, false);
				this.html.addEventListener("keydown", _26fd, false);
				this.html.addEventListener("dblclick", _272e, false);
			} else {
				if (this.html.attachEvent) {
					this.html.attachEvent("oncontextmenu", _26f3);
					this.html.attachEvent("onmousemove", _2724);
					this.html.attachEvent("onmousedown", _2700);
					this.html.attachEvent("onmouseup", _2711);
					this.html.attachEvent("onkeydown", _26fd);
					this.html.attachEvent("ondblclick", _272e);
				} else {
					throw "FreeGroup Draw2D 0.9.31 not supported in this browser.";
				}
			}
		}
	} catch (e) {
		pushErrorStack(e, "draw2d.Workflow=function(/*:String*/id)");
	}
};
draw2d.Workflow.prototype = new draw2d.Canvas();
draw2d.Workflow.prototype.type = "draw2d.Workflow";
draw2d.Workflow.COLOR_GREEN = new draw2d.Color(0, 255, 0);
draw2d.Workflow.prototype.clear = function() {
	this.scrollTo(0, 0, true);
	this.gridWidthX = 10;
	this.gridWidthY = 10;
	this.snapToGridHelper = null;
	this.verticalSnapToHelperLine = null;
	this.horizontalSnapToHelperLine = null;
	var _2737 = this.getDocument();
	var _2738 = _2737.getLines().clone();
	for ( var i = 0; i < _2738.getSize(); i++) {
		(new draw2d.CommandDelete(_2738.get(i))).execute();
	}
	var _273a = _2737.getFigures().clone();
	for ( var i = 0; i < _273a.getSize(); i++) {
		(new draw2d.CommandDelete(_273a.get(i))).execute();
	}
	this.commonPorts.removeAllElements();
	this.dropTargets.removeAllElements();
	this.compartments.removeAllElements();
	this.selectionListeners.removeAllElements();
	this.dialogs.removeAllElements();
	this.commandStack = new draw2d.CommandStack();
	this.currentSelection = null;
	this.currentMenu = null;
	draw2d.Drag.clearCurrent();
};
draw2d.Workflow.prototype.onScroll = function() {
	var _273b = this.getScrollLeft();
	var _273c = this.getScrollTop();
	var _273d = _273b - this.oldScrollPosLeft;
	var _273e = _273c - this.oldScrollPosTop;
	for ( var i = 0; i < this.figures.getSize(); i++) {
		var _2740 = this.figures.get(i);
		if (_2740.hasFixedPosition && _2740.hasFixedPosition() == true) {
			_2740.setPosition(_2740.getX() + _273d, _2740.getY() + _273e);
		}
	}
	this.oldScrollPosLeft = _273b;
	this.oldScrollPosTop = _273c;
};
draw2d.Workflow.prototype.setPanning = function(flag) {
	this.panning = flag;
	if (flag) {
		this.html.style.cursor = "move";
	} else {
		this.html.style.cursor = "default";
	}
};
draw2d.Workflow.prototype.scrollTo = function(x, y, fast) {
	if (fast) {
		this.scrollArea.scrollLeft = x;
		this.scrollArea.scrollTop = y;
	} else {
		var steps = 40;
		var xStep = (x - this.getScrollLeft()) / steps;
		var yStep = (y - this.getScrollTop()) / steps;
		var oldX = this.getScrollLeft();
		var oldY = this.getScrollTop();
		for ( var i = 0; i < steps; i++) {
			this.scrollArea.scrollLeft = oldX + (xStep * i);
			this.scrollArea.scrollTop = oldY + (yStep * i);
		}
	}
};
draw2d.Workflow.prototype.showTooltip = function(_274b, _274c) {
	if (this.tooltip !== null) {
		this.removeFigure(this.tooltip);
		this.tooltip = null;
		if (this.tooltipTimer >= 0) {
			window.clearTimeout(this.tooltipTimer);
			this.tooltipTimer = -1;
		}
	}
	this.tooltip = _274b;
	if (this.tooltip !== null) {
		this.currentTooltipX = this.currentMouseX;
		this.currentTooltipY = this.currentMouseY;
		this.addFigure(this.tooltip, this.currentTooltipX + 10,
				this.currentTooltipY + 10);
		var oThis = this;
		var _274e = function() {
			oThis.tooltipTimer = -1;
			oThis.showTooltip(null);
		};
		if (_274c == true) {
			this.tooltipTimer = window.setTimeout(_274e, 5000);
		}
	}
};
draw2d.Workflow.prototype.showDialog = function(_274f, xPos, yPos) {
	if (xPos) {
		this.addFigure(_274f, xPos, yPos);
	} else {
		this.addFigure(_274f, 200, 100);
	}
	this.dialogs.add(_274f);
};
draw2d.Workflow.prototype.showMenu = function(menu, xPos, yPos) {
	if (this.menu !== null) {
		this.html.removeChild(this.menu.getHTMLElement());
		this.menu.setWorkflow();
	}
	this.menu = menu;
	if (this.menu !== null) {
		this.menu.setWorkflow(this);
		this.menu.setPosition(xPos, yPos);
		this.html.appendChild(this.menu.getHTMLElement());
		this.menu.paint();
	}
};
draw2d.Workflow.prototype.onContextMenu = function(x, y) {
	var menu = this.getContextMenu();
	if (menu !== null) {
		this.showMenu(menu, x, y);
	}
};
draw2d.Workflow.prototype.getContextMenu = function() {
	return null;
};
draw2d.Workflow.prototype.setToolWindow = function(_2758, x, y) {
	this.toolPalette = _2758;
	if (y) {
		this.addFigure(_2758, x, y);
	} else {
		this.addFigure(_2758, 20, 20);
	}
	this.dialogs.add(_2758);
};
draw2d.Workflow.prototype.setSnapToGrid = function(flag) {
	if (flag) {
		this.snapToGridHelper = new draw2d.SnapToGrid(this);
	} else {
		this.snapToGridHelper = null;
	}
};
draw2d.Workflow.prototype.setSnapToGeometry = function(flag) {
	if (flag) {
		this.snapToGeometryHelper = new draw2d.SnapToGeometry(this);
	} else {
		this.snapToGeometryHelper = null;
	}
};
draw2d.Workflow.prototype.setGridWidth = function(dx, dy) {
	this.gridWidthX = dx;
	this.gridWidthY = dy;
};
draw2d.Workflow.prototype.addFigure = function(_275f, xPos, yPos) {
	try {
		draw2d.Canvas.prototype.addFigure.call(this, _275f, xPos, yPos, true);
		_275f.setWorkflow(this);
		var _2762 = this;
		if (_275f instanceof draw2d.CompartmentFigure) {
			this.compartments.add(_275f);
		}
		if (_275f instanceof draw2d.Line) {
			this.lines.add(_275f);
		} else {
			this.figures.add(_275f);
			_275f.draggable.addEventListener("drag", function(_2763) {
				var _2764 = _2762.getFigure(_2763.target.element.id);
				if (_2764 === null) {
					return;
				}
				if (_2764.isSelectable() == false) {
					return;
				}
				_2762.moveResizeHandles(_2764);
			});
		}
		_275f.paint();
		this.setDocumentDirty();
	} catch (e) {
		pushErrorStack(
				e,
				"draw2d.Workflow.prototype.addFigure=function(/*:draw2d.Figure*/ figure ,/*:int*/ xPos, /*:int*/ yPos)");
	}
};
draw2d.Workflow.prototype.removeFigure = function(_2765) {
	draw2d.Canvas.prototype.removeFigure.call(this, _2765);
	this.figures.remove(_2765);
	this.lines.remove(_2765);
	this.dialogs.remove(_2765);
	_2765.setWorkflow(null);
	if (_2765 instanceof draw2d.CompartmentFigure) {
		this.compartments.remove(_2765);
	}
	if (_2765 instanceof draw2d.Connection) {
		_2765.disconnect();
	}
	if (this.currentSelection == _2765) {
		this.setCurrentSelection(null);
	}
	this.setDocumentDirty();
	_2765.onRemove(this);
};
draw2d.Workflow.prototype.moveFront = function(_2766) {
	this.html.removeChild(_2766.getHTMLElement());
	this.html.appendChild(_2766.getHTMLElement());
};
draw2d.Workflow.prototype.moveBack = function(_2767) {
	this.html.removeChild(_2767.getHTMLElement());
	this.html.insertBefore(_2767.getHTMLElement(), this.html.firstChild);
};
draw2d.Workflow.prototype.getBestCompartmentFigure = function(x, y, _276a) {
	var _276b = null;
	for ( var i = 0; i < this.figures.getSize(); i++) {
		var _276d = this.figures.get(i);
		if ((_276d instanceof draw2d.CompartmentFigure)
				&& _276d.isOver(x, y) == true && _276d != _276a) {
			if (_276b === null) {
				_276b = _276d;
			} else {
				if (_276b.getZOrder() < _276d.getZOrder()) {
					_276b = _276d;
				}
			}
		}
	}
	return _276b;
};
draw2d.Workflow.prototype.getBestFigure = function(x, y, _2770) {
	var _2771 = null;
	for ( var i = 0; i < this.figures.getSize(); i++) {
		var _2773 = this.figures.get(i);
		if (_2773.isOver(x, y) == true && _2773 != _2770) {
			if (_2771 === null) {
				_2771 = _2773;
			} else {
				if (_2771.getZOrder() < _2773.getZOrder()) {
					_2771 = _2773;
				}
			}
		}
	}
	return _2771;
};
draw2d.Workflow.prototype.getBestLine = function(x, y, _2776) {
	var _2777 = null;
	var count = this.lines.getSize();
	for ( var i = 0; i < count; i++) {
		var line = this.lines.get(i);
		if (line.containsPoint(x, y) == true && line != _2776) {
			if (_2777 === null) {
				_2777 = line;
			} else {
				if (_2777.getZOrder() < line.getZOrder()) {
					_2777 = line;
				}
			}
		}
	}
	return _2777;
};
draw2d.Workflow.prototype.getFigure = function(id) {
	for ( var i = 0; i < this.figures.getSize(); i++) {
		var _277d = this.figures.get(i);
		if (_277d.id == id) {
			return _277d;
		}
	}
	return null;
};
draw2d.Workflow.prototype.getFigures = function() {
	return this.figures;
};
draw2d.Workflow.prototype.getDocument = function() {
	return new draw2d.CanvasDocument(this);
};
draw2d.Workflow.prototype.addSelectionListener = function(w) {
	if (w !== null) {
		if (w.onSelectionChanged) {
			this.selectionListeners.add(w);
		} else {
			throw "Object doesn't implement required callback method [onSelectionChanged]";
		}
	}
};
draw2d.Workflow.prototype.removeSelectionListener = function(w) {
	this.selectionListeners.remove(w);
};
draw2d.Workflow.prototype.setCurrentSelection = function(_2780) {
	if (_2780 === null || this.currentSelection != _2780) {
		this.hideResizeHandles();
		this.hideLineResizeHandles();
	}
	this.currentSelection = _2780;
	for ( var i = 0; i < this.selectionListeners.getSize(); i++) {
		var w = this.selectionListeners.get(i);
		if (w.onSelectionChanged) {
			w.onSelectionChanged(this.currentSelection,
					this.currentSelection ? this.currentSelection.getModel()
							: null);
		}
	}
	if (_2780 instanceof draw2d.Line) {
		this.showLineResizeHandles(_2780);
		if (!(_2780 instanceof draw2d.Connection)) {
			this.draggingLineCommand = _2780
					.createCommand(new draw2d.EditPolicy(draw2d.EditPolicy.MOVE));
			if (this.draggingLineCommand !== null) {
				this.draggingLine = _2780;
			}
		}
	}
};
draw2d.Workflow.prototype.getCurrentSelection = function() {
	return this.currentSelection;
};
draw2d.Workflow.prototype.getLine = function(id) {
	var count = this.lines.getSize();
	for ( var i = 0; i < count; i++) {
		var line = this.lines.get(i);
		if (line.getId() == id) {
			return line;
		}
	}
	return null;
};
draw2d.Workflow.prototype.getLines = function() {
	return this.lines;
};
draw2d.Workflow.prototype.registerPort = function(port) {
	port.draggable.targets = this.dropTargets;
	this.commonPorts.add(port);
	this.dropTargets.add(port.dropable);
};
draw2d.Workflow.prototype.unregisterPort = function(port) {
	port.draggable.targets = null;
	this.commonPorts.remove(port);
	this.dropTargets.remove(port.dropable);
};
draw2d.Workflow.prototype.getCommandStack = function() {
	return this.commandStack;
};
draw2d.Workflow.prototype.showConnectionLine = function(x1, y1, x2, y2) {
	this.connectionLine.setStartPoint(x1, y1);
	this.connectionLine.setEndPoint(x2, y2);
	if (this.connectionLine.canvas === null) {
		draw2d.Canvas.prototype.addFigure.call(this, this.connectionLine);
	}
};
draw2d.Workflow.prototype.hideConnectionLine = function() {
	if (this.connectionLine.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.connectionLine);
	}
};
draw2d.Workflow.prototype.showLineResizeHandles = function(_278d) {
	var _278e = this.resizeHandleStart.getWidth() / 2;
	var _278f = this.resizeHandleStart.getHeight() / 2;
	var _2790 = _278d.getStartPoint();
	var _2791 = _278d.getEndPoint();
	draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandleStart,
			_2790.x - _278e, _2790.y - _278e);
	draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandleEnd, _2791.x
			- _278e, _2791.y - _278e);
	this.resizeHandleStart.setCanDrag(_278d.isResizeable());
	this.resizeHandleEnd.setCanDrag(_278d.isResizeable());
	if (_278d.isResizeable()) {
		this.resizeHandleStart.setBackgroundColor(draw2d.Workflow.COLOR_GREEN);
		this.resizeHandleEnd.setBackgroundColor(draw2d.Workflow.COLOR_GREEN);
		this.resizeHandleStart.draggable.targets = this.dropTargets;
		this.resizeHandleEnd.draggable.targets = this.dropTargets;
	} else {
		this.resizeHandleStart.setBackgroundColor(null);
		this.resizeHandleEnd.setBackgroundColor(null);
	}
};
draw2d.Workflow.prototype.hideLineResizeHandles = function() {
	if (this.resizeHandleStart.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandleStart);
	}
	if (this.resizeHandleEnd.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandleEnd);
	}
};
draw2d.Workflow.prototype.showResizeHandles = function(_2792) {
	this.hideLineResizeHandles();
	this.hideResizeHandles();
	if (this.getEnableSmoothFigureHandling() == true
			&& this.getCurrentSelection() != _2792) {
		this.resizeHandle1.setAlpha(0.01);
		this.resizeHandle2.setAlpha(0.01);
		this.resizeHandle3.setAlpha(0.01);
		this.resizeHandle4.setAlpha(0.01);
		this.resizeHandle5.setAlpha(0.01);
		this.resizeHandle6.setAlpha(0.01);
		this.resizeHandle7.setAlpha(0.01);
		this.resizeHandle8.setAlpha(0.01);
	}
	var _2793 = this.resizeHandle1.getWidth();
	var _2794 = this.resizeHandle1.getHeight();
	var _2795 = _2792.getHeight();
	var _2796 = _2792.getWidth();
	var xPos = _2792.getX();
	var yPos = _2792.getY();
	draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle1, xPos
			- _2793, yPos - _2794);
	draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle3, xPos
			+ _2796, yPos - _2794);
	draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle5, xPos
			+ _2796, yPos + _2795);
	draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle7, xPos
			- _2793, yPos + _2795);
	this.moveFront(this.resizeHandle1);
	this.moveFront(this.resizeHandle3);
	this.moveFront(this.resizeHandle5);
	this.moveFront(this.resizeHandle7);
	this.resizeHandle1.setCanDrag(_2792.isResizeable());
	this.resizeHandle3.setCanDrag(_2792.isResizeable());
	this.resizeHandle5.setCanDrag(_2792.isResizeable());
	this.resizeHandle7.setCanDrag(_2792.isResizeable());
	if (_2792.isResizeable()) {
		var green = new draw2d.Color(0, 255, 0);
		this.resizeHandle1.setBackgroundColor(green);
		this.resizeHandle3.setBackgroundColor(green);
		this.resizeHandle5.setBackgroundColor(green);
		this.resizeHandle7.setBackgroundColor(green);
	} else {
		this.resizeHandle1.setBackgroundColor(null);
		this.resizeHandle3.setBackgroundColor(null);
		this.resizeHandle5.setBackgroundColor(null);
		this.resizeHandle7.setBackgroundColor(null);
	}
	if (_2792.isStrechable() && _2792.isResizeable()) {
		this.resizeHandle2.setCanDrag(_2792.isResizeable());
		this.resizeHandle4.setCanDrag(_2792.isResizeable());
		this.resizeHandle6.setCanDrag(_2792.isResizeable());
		this.resizeHandle8.setCanDrag(_2792.isResizeable());
		draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle2, xPos
				+ (_2796 / 2) - this.resizeHandleHalfWidth, yPos - _2794);
		draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle4, xPos
				+ _2796, yPos + (_2795 / 2) - (_2794 / 2));
		draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle6, xPos
				+ (_2796 / 2) - this.resizeHandleHalfWidth, yPos + _2795);
		draw2d.Canvas.prototype.addFigure.call(this, this.resizeHandle8, xPos
				- _2793, yPos + (_2795 / 2) - (_2794 / 2));
		this.moveFront(this.resizeHandle2);
		this.moveFront(this.resizeHandle4);
		this.moveFront(this.resizeHandle6);
		this.moveFront(this.resizeHandle8);
	}
};
draw2d.Workflow.prototype.hideResizeHandles = function() {
	if (this.resizeHandle1.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle1);
	}
	if (this.resizeHandle2.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle2);
	}
	if (this.resizeHandle3.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle3);
	}
	if (this.resizeHandle4.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle4);
	}
	if (this.resizeHandle5.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle5);
	}
	if (this.resizeHandle6.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle6);
	}
	if (this.resizeHandle7.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle7);
	}
	if (this.resizeHandle8.canvas !== null) {
		draw2d.Canvas.prototype.removeFigure.call(this, this.resizeHandle8);
	}
};
draw2d.Workflow.prototype.moveResizeHandles = function(_279a) {
	var _279b = this.resizeHandle1.getWidth();
	var _279c = this.resizeHandle1.getHeight();
	var _279d = _279a.getHeight();
	var _279e = _279a.getWidth();
	var xPos = _279a.getX();
	var yPos = _279a.getY();
	this.resizeHandle1.setPosition(xPos - _279b, yPos - _279c);
	this.resizeHandle3.setPosition(xPos + _279e, yPos - _279c);
	this.resizeHandle5.setPosition(xPos + _279e, yPos + _279d);
	this.resizeHandle7.setPosition(xPos - _279b, yPos + _279d);
	if (_279a.isStrechable()) {
		this.resizeHandle2.setPosition(xPos + (_279e / 2)
				- this.resizeHandleHalfWidth, yPos - _279c);
		this.resizeHandle4.setPosition(xPos + _279e, yPos + (_279d / 2)
				- (_279c / 2));
		this.resizeHandle6.setPosition(xPos + (_279e / 2)
				- this.resizeHandleHalfWidth, yPos + _279d);
		this.resizeHandle8.setPosition(xPos - _279b, yPos + (_279d / 2)
				- (_279c / 2));
	}
};
draw2d.Workflow.prototype.onMouseDown = function(x, y) {
	this.dragging = true;
	this.mouseDownPosX = x;
	this.mouseDownPosY = y;
	if (this.toolPalette !== null && this.toolPalette.getActiveTool() !== null) {
		this.toolPalette.getActiveTool().execute(x, y);
	}
	this.showMenu(null);
	var line = this.getBestLine(x, y);
	if (line !== null && line.isSelectable()) {
		this.setCurrentSelection(line);
	} else {
		this.setCurrentSelection(null);
	}
};
draw2d.Workflow.prototype.onMouseUp = function(x, y) {
	this.dragging = false;
	if (this.draggingLineCommand !== null) {
		this.getCommandStack().execute(this.draggingLineCommand);
		this.draggingLine = null;
		this.draggingLineCommand = null;
	}
};
draw2d.Workflow.prototype.onMouseMove = function(x, y) {
	if (this.dragging === true && this.draggingLine !== null) {
		var diffX = x - this.mouseDownPosX;
		var diffY = y - this.mouseDownPosY;
		this.draggingLine.startX = this.draggingLine.getStartX() + diffX;
		this.draggingLine.startY = this.draggingLine.getStartY() + diffY;
		this.draggingLine.setEndPoint(this.draggingLine.getEndX() + diffX,
				this.draggingLine.getEndY() + diffY);
		this.mouseDownPosX = x;
		this.mouseDownPosY = y;
		this.showLineResizeHandles(this.currentSelection);
	} else {
		if (this.dragging === true && this.panning === true) {
			var diffX = x - this.mouseDownPosX;
			var diffY = y - this.mouseDownPosY;
			this.scrollTo(this.getScrollLeft() - diffX, this.getScrollTop()
					- diffY, true);
			this.onScroll();
		}
	}
};
draw2d.Workflow.prototype.onKeyDown = function(_27aa, ctrl) {
	if (_27aa == 46 && this.currentSelection !== null) {
		this.commandStack
				.execute(this.currentSelection
						.createCommand(new draw2d.EditPolicy(
								draw2d.EditPolicy.DELETE)));
	} else {
		if (_27aa == 90 && ctrl) {
			this.commandStack.undo();
		} else {
			if (_27aa == 89 && ctrl) {
				this.commandStack.redo();
			}
		}
	}
};
draw2d.Workflow.prototype.setDocumentDirty = function() {
	try {
		for ( var i = 0; i < this.dialogs.getSize(); i++) {
			var d = this.dialogs.get(i);
			if (d !== null && d.onSetDocumentDirty) {
				d.onSetDocumentDirty();
			}
		}
		if (this.snapToGeometryHelper !== null) {
			this.snapToGeometryHelper.onSetDocumentDirty();
		}
		if (this.snapToGridHelper !== null) {
			this.snapToGridHelper.onSetDocumentDirty();
		}
	} catch (e) {
		pushErrorStack(e,
				"draw2d.Workflow.prototype.setDocumentDirty=function()");
	}
};
draw2d.Workflow.prototype.snapToHelper = function(_27ae, pos) {
	if (this.snapToGeometryHelper !== null) {
		if (_27ae instanceof draw2d.ResizeHandle) {
			var _27b0 = _27ae.getSnapToGridAnchor();
			pos.x += _27b0.x;
			pos.y += _27b0.y;
			var _27b1 = new draw2d.Point(pos.x, pos.y);
			var _27b2 = _27ae.getSnapToDirection();
			var _27b3 = this.snapToGeometryHelper.snapPoint(_27b2, pos, _27b1);
			if ((_27b2 & draw2d.SnapToHelper.EAST_WEST)
					&& !(_27b3 & draw2d.SnapToHelper.EAST_WEST)) {
				this.showSnapToHelperLineVertical(_27b1.x);
			} else {
				this.hideSnapToHelperLineVertical();
			}
			if ((_27b2 & draw2d.SnapToHelper.NORTH_SOUTH)
					&& !(_27b3 & draw2d.SnapToHelper.NORTH_SOUTH)) {
				this.showSnapToHelperLineHorizontal(_27b1.y);
			} else {
				this.hideSnapToHelperLineHorizontal();
			}
			_27b1.x -= _27b0.x;
			_27b1.y -= _27b0.y;
			return _27b1;
		} else {
			var _27b4 = new draw2d.Dimension(pos.x, pos.y, _27ae.getWidth(),
					_27ae.getHeight());
			var _27b1 = new draw2d.Dimension(pos.x, pos.y, _27ae.getWidth(),
					_27ae.getHeight());
			var _27b2 = draw2d.SnapToHelper.NSEW;
			var _27b3 = this.snapToGeometryHelper.snapRectangle(_27b4, _27b1);
			if ((_27b2 & draw2d.SnapToHelper.WEST)
					&& !(_27b3 & draw2d.SnapToHelper.WEST)) {
				this.showSnapToHelperLineVertical(_27b1.x);
			} else {
				if ((_27b2 & draw2d.SnapToHelper.EAST)
						&& !(_27b3 & draw2d.SnapToHelper.EAST)) {
					this.showSnapToHelperLineVertical(_27b1.getX()
							+ _27b1.getWidth());
				} else {
					this.hideSnapToHelperLineVertical();
				}
			}
			if ((_27b2 & draw2d.SnapToHelper.NORTH)
					&& !(_27b3 & draw2d.SnapToHelper.NORTH)) {
				this.showSnapToHelperLineHorizontal(_27b1.y);
			} else {
				if ((_27b2 & draw2d.SnapToHelper.SOUTH)
						&& !(_27b3 & draw2d.SnapToHelper.SOUTH)) {
					this.showSnapToHelperLineHorizontal(_27b1.getY()
							+ _27b1.getHeight());
				} else {
					this.hideSnapToHelperLineHorizontal();
				}
			}
			return _27b1.getTopLeft();
		}
	} else {
		if (this.snapToGridHelper !== null) {
			var _27b0 = _27ae.getSnapToGridAnchor();
			pos.x = pos.x + _27b0.x;
			pos.y = pos.y + _27b0.y;
			var _27b1 = new draw2d.Point(pos.x, pos.y);
			this.snapToGridHelper.snapPoint(0, pos, _27b1);
			_27b1.x = _27b1.x - _27b0.x;
			_27b1.y = _27b1.y - _27b0.y;
			return _27b1;
		}
	}
	return pos;
};
draw2d.Workflow.prototype.showSnapToHelperLineHorizontal = function(_27b5) {
	if (this.horizontalSnapToHelperLine === null) {
		this.horizontalSnapToHelperLine = new draw2d.Line();
		this.horizontalSnapToHelperLine
				.setColor(new draw2d.Color(175, 175, 255));
		this.addFigure(this.horizontalSnapToHelperLine);
	}
	this.horizontalSnapToHelperLine.setStartPoint(0, _27b5);
	this.horizontalSnapToHelperLine.setEndPoint(this.getWidth(), _27b5);
};
draw2d.Workflow.prototype.showSnapToHelperLineVertical = function(_27b6) {
	if (this.verticalSnapToHelperLine === null) {
		this.verticalSnapToHelperLine = new draw2d.Line();
		this.verticalSnapToHelperLine.setColor(new draw2d.Color(175, 175, 255));
		this.addFigure(this.verticalSnapToHelperLine);
	}
	this.verticalSnapToHelperLine.setStartPoint(_27b6, 0);
	this.verticalSnapToHelperLine.setEndPoint(_27b6, this.getHeight());
};
draw2d.Workflow.prototype.hideSnapToHelperLines = function() {
	this.hideSnapToHelperLineHorizontal();
	this.hideSnapToHelperLineVertical();
};
draw2d.Workflow.prototype.hideSnapToHelperLineHorizontal = function() {
	if (this.horizontalSnapToHelperLine !== null) {
		this.removeFigure(this.horizontalSnapToHelperLine);
		this.horizontalSnapToHelperLine = null;
	}
};
draw2d.Workflow.prototype.hideSnapToHelperLineVertical = function() {
	if (this.verticalSnapToHelperLine !== null) {
		this.removeFigure(this.verticalSnapToHelperLine);
		this.verticalSnapToHelperLine = null;
	}
};
draw2d.WindowFigure = function(title) {
	this.title = title;
	this.titlebar = null;
	draw2d.Figure.call(this);
	this.dropShadow = 5;
	this.setDeleteable(false);
	this.setCanSnapToHelper(false);
	this.setZOrder(draw2d.WindowFigure.ZOrderIndex);
};
draw2d.WindowFigure.prototype = new draw2d.Figure();
draw2d.WindowFigure.prototype.type = ":draw2d.WindowFigure";
draw2d.WindowFigure.ZOrderIndex = 50000;
draw2d.WindowFigure.setZOrderBaseIndex = function(index) {
	draw2d.WindowFigure.ZOrderBaseIndex = index;
};
draw2d.WindowFigure.prototype.hasFixedPosition = function() {
	return true;
};
draw2d.WindowFigure.prototype.hasTitleBar = function() {
	return true;
};
draw2d.WindowFigure.prototype.createHTMLElement = function() {
	var item = draw2d.Figure.prototype.createHTMLElement.call(this);
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.style.border = "1px solid black";
	item.style.backgroundImage = "url(window_bg.png)";
	if (this.dropShadow > 0) {
		item.style.boxShadow = this.dropShadow + "px " + this.dropShadow
				+ "px " + this.dropShadow + "px #ccc";
	}
	item.style.borderRadius = "2px";
	item.style.zIndex = draw2d.WindowFigure.ZOrderIndex;
	item.style.cursor = null;
	item.className = "WindowFigure";
	if (this.hasTitleBar()) {
		this.titlebar = document.createElement("div");
		this.titlebar.style.position = "absolute";
		this.titlebar.style.left = "0px";
		this.titlebar.style.top = "0px";
		this.titlebar.style.width = this.getWidth() + "px";
		this.titlebar.style.height = "15px";
		this.titlebar.style.margin = "0px";
		this.titlebar.style.padding = "0px";
		this.titlebar.style.font = "normal 10px verdana";
		this.titlebar.style.backgroundColor = "blue";
		this.titlebar.style.borderBottom = "2px solid gray";
		this.titlebar.style.whiteSpace = "nowrap";
		this.titlebar.style.textAlign = "center";
		this.titlebar.style.backgroundImage = "url(window_toolbar.png)";
		this.titlebar.className = "WindowFigure_titlebar";
		this.textNode = document.createTextNode(this.title);
		this.titlebar.appendChild(this.textNode);
		this.disableTextSelection(this.titlebar);
		item.appendChild(this.titlebar);
	}
	return item;
};
draw2d.WindowFigure.prototype.setDocumentDirty = function(_1706) {
};
draw2d.WindowFigure.prototype.onDragend = function() {
};
draw2d.WindowFigure.prototype.onDragstart = function(x, y) {
	if (this.titlebar === null) {
		return false;
	}
	if (this.canDrag === true && x < parseInt(this.titlebar.style.width)
			&& y < parseInt(this.titlebar.style.height)) {
		return true;
	}
	return false;
};
draw2d.WindowFigure.prototype.isSelectable = function() {
	return false;
};
draw2d.WindowFigure.prototype.setCanDrag = function(flag) {
	draw2d.Figure.prototype.setCanDrag.call(this, flag);
	this.html.style.cursor = "";
	if (this.titlebar === null) {
		return;
	}
	if (flag) {
		this.titlebar.style.cursor = "move";
	} else {
		this.titlebar.style.cursor = "";
	}
};
draw2d.WindowFigure.prototype.setWorkflow = function(_170a) {
	var _170b = this.workflow;
	draw2d.Figure.prototype.setWorkflow.call(this, _170a);
	if (_170b !== null) {
		_170b.removeSelectionListener(this);
	}
	if (this.workflow != null) {
		this.workflow.addSelectionListener(this);
	}
};
draw2d.WindowFigure.prototype.setDropShadow = function(w) {
	this.dropShadow = w;
	if (this.html === null) {
		return;
	}
	if (this.dropShadow > 0) {
		this.html.style.boxShadow = w + "px " + w + "px " + w + "px #ccc";
	} else {
		this.html.style.boxShadow = "";
	}
};
draw2d.WindowFigure.prototype.setDimension = function(w, h) {
	draw2d.Figure.prototype.setDimension.call(this, w, h);
	if (this.titlebar !== null) {
		this.titlebar.style.width = this.getWidth() + "px";
	}
};
draw2d.WindowFigure.prototype.setTitle = function(title) {
	this.title = title;
};
draw2d.WindowFigure.prototype.getMinWidth = function() {
	return 50;
};
draw2d.WindowFigure.prototype.getMinHeight = function() {
	return 50;
};
draw2d.WindowFigure.prototype.isResizeable = function() {
	return false;
};
draw2d.WindowFigure.prototype.setAlpha = function(_1710) {
};
draw2d.WindowFigure.prototype.setBackgroundColor = function(color) {
	this.bgColor = color;
	if (this.bgColor !== null) {
		this.html.style.backgroundColor = this.bgColor.getHTMLStyle();
	} else {
		this.html.style.backgroundColor = "transparent";
		this.html.style.backgroundImage = "";
	}
};
draw2d.WindowFigure.prototype.setColor = function(color) {
	this.lineColor = color;
	if (this.lineColor !== null) {
		this.html.style.border = this.lineStroke + "px solid "
				+ this.lineColor.getHTMLStyle();
	} else {
		this.html.style.border = "0px";
	}
};
draw2d.WindowFigure.prototype.setLineWidth = function(w) {
	this.lineStroke = w;
	this.html.style.border = this.lineStroke + "px solid black";
};
draw2d.WindowFigure.prototype.onSelectionChanged = function(_1714, model) {
};
draw2d.Button = function(_2675, width, _2677) {
	this.x = 0;
	this.y = 0;
	this.width = 24;
	this.height = 24;
	this.id = draw2d.UUID.create();
	this.enabled = true;
	this.active = false;
	this.palette = _2675;
	this.html = this.createHTMLElement();
	if (width !== undefined && _2677 !== undefined) {
		this.setDimension(width, _2677);
	} else {
		this.setDimension(24, 24);
	}
};
draw2d.Button.prototype.type = "draw2d.Button";
draw2d.Button.prototype.dispose = function() {
};
draw2d.Button.prototype.getImageUrl = function() {
	return this.type + ".png";
};
draw2d.Button.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.id = this.id;
	item.style.position = "absolute";
	item.style.left = this.x + "px";
	item.style.top = this.y + "px";
	item.style.height = this.width + "px";
	item.style.width = this.height + "px";
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.style.outline = "none";
	if (this.getImageUrl() !== null) {
		item.style.backgroundImage = "url(" + this.getImageUrl() + ")";
	} else {
		item.style.backgroundImage = "";
	}
	var oThis = this;
	this.omousedown = function(event) {
		if (oThis.enabled) {
			oThis.setActive(true);
		}
		event.cancelBubble = true;
		event.returnValue = false;
	};
	this.omouseup = function(event) {
		if (oThis.enabled) {
			oThis.setActive(false);
			oThis.execute();
			oThis.palette.setActiveTool(null);
		}
		event.cancelBubble = true;
		event.returnValue = false;
	};
	if (item.addEventListener) {
		item.addEventListener("mousedown", this.omousedown, false);
		item.addEventListener("mouseup", this.omouseup, false);
	} else {
		if (item.attachEvent) {
			item.attachEvent("onmousedown", this.omousedown);
			item.attachEvent("onmouseup", this.omouseup);
		}
	}
	return item;
};
draw2d.Button.prototype.getHTMLElement = function() {
	if (this.html === null) {
		this.html = this.createHTMLElement();
	}
	return this.html;
};
draw2d.Button.prototype.execute = function() {
};
draw2d.Button.prototype.setTooltip = function(_267c) {
	this.tooltip = _267c;
	if (this.tooltip !== null) {
		this.html.title = this.tooltip;
	} else {
		this.html.title = "";
	}
};
draw2d.Button.prototype.getWorkflow = function() {
	return this.getToolPalette().getWorkflow();
};
draw2d.Button.prototype.getToolPalette = function() {
	return this.palette;
};
draw2d.Button.prototype.setActive = function(flag) {
	if (!this.enabled) {
		return;
	}
	this.active = flag;
	if (flag === true) {
		this.html.style.border = "1px inset";
	} else {
		this.html.style.border = "0px";
	}
};
draw2d.Button.prototype.isActive = function() {
	return this.active;
};
draw2d.Button.prototype.setEnabled = function(flag) {
	this.enabled = flag;
	if (flag) {
		this.html.style.filter = "alpha(opacity=100)";
		this.html.style.opacity = "1.0";
	} else {
		this.html.style.filter = "alpha(opacity=30)";
		this.html.style.opacity = "0.3";
	}
};
draw2d.Button.prototype.setDimension = function(w, h) {
	this.width = w;
	this.height = h;
	if (this.html === null) {
		return;
	}
	this.html.style.width = this.width + "px";
	this.html.style.height = this.height + "px";
};
draw2d.Button.prototype.setPosition = function(xPos, yPos) {
	this.x = Math.max(0, xPos);
	this.y = Math.max(0, yPos);
	if (this.html === null) {
		return;
	}
	this.html.style.left = this.x + "px";
	this.html.style.top = this.y + "px";
};
draw2d.Button.prototype.getWidth = function() {
	return this.width;
};
draw2d.Button.prototype.getHeight = function() {
	return this.height;
};
draw2d.Button.prototype.getY = function() {
	return this.y;
};
draw2d.Button.prototype.getX = function() {
	return this.x;
};
draw2d.Button.prototype.getPosition = function() {
	return new draw2d.Point(this.x, this.y);
};
draw2d.ToggleButton = function(_2894) {
	draw2d.Button.call(this, _2894);
	this.isDownFlag = false;
};
draw2d.ToggleButton.prototype = new draw2d.Button();
draw2d.ToggleButton.prototype.type = "draw2d.ToggleButton";
draw2d.ToggleButton.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.id = this.id;
	item.style.position = "absolute";
	item.style.left = this.x + "px";
	item.style.top = this.y + "px";
	item.style.height = "24px";
	item.style.width = "24px";
	item.style.margin = "0px";
	item.style.padding = "0px";
	if (this.getImageUrl() !== null) {
		item.style.backgroundImage = "url(" + this.getImageUrl() + ")";
	} else {
		item.style.backgroundImage = "";
	}
	var oThis = this;
	this.omousedown = function(event) {
		if (oThis.enabled) {
			if (!oThis.isDown()) {
				draw2d.Button.prototype.setActive.call(oThis, true);
			}
		}
		event.cancelBubble = true;
		event.returnValue = false;
	};
	this.omouseup = function(event) {
		if (oThis.enabled) {
			if (oThis.isDown()) {
				draw2d.Button.prototype.setActive.call(oThis, false);
			}
			oThis.isDownFlag = !oThis.isDownFlag;
			oThis.execute();
		}
		event.cancelBubble = true;
		event.returnValue = false;
	};
	if (item.addEventListener) {
		item.addEventListener("mousedown", this.omousedown, false);
		item.addEventListener("mouseup", this.omouseup, false);
	} else {
		if (item.attachEvent) {
			item.attachEvent("onmousedown", this.omousedown);
			item.attachEvent("onmouseup", this.omouseup);
		}
	}
	return item;
};
draw2d.ToggleButton.prototype.isDown = function() {
	return this.isDownFlag;
};
draw2d.ToggleButton.prototype.setActive = function(flag) {
	draw2d.Button.prototype.setActive.call(this, flag);
	this.isDownFlag = flag;
};
draw2d.ToggleButton.prototype.execute = function() {
};
draw2d.ToolGeneric = function(_25fa) {
	this.x = 0;
	this.y = 0;
	this.enabled = true;
	this.tooltip = null;
	this.palette = _25fa;
	this.html = this.createHTMLElement();
	this.setDimension(10, 10);
};
draw2d.ToolGeneric.prototype.type = "draw2d.ToolGeneric";
draw2d.ToolGeneric.prototype.dispose = function() {
};
draw2d.ToolGeneric.prototype.getImageUrl = function() {
	return this.type + ".png";
};
draw2d.ToolGeneric.prototype.getWorkflow = function() {
	return this.getToolPalette().getWorkflow();
};
draw2d.ToolGeneric.prototype.getToolPalette = function() {
	return this.palette;
};
draw2d.ToolGeneric.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.id = this.id;
	item.style.position = "absolute";
	item.style.left = this.x + "px";
	item.style.top = this.y + "px";
	item.style.height = "24px";
	item.style.width = "24px";
	item.style.margin = "0px";
	item.style.padding = "0px";
	if (this.getImageUrl() !== null) {
		item.style.backgroundImage = "url(" + this.getImageUrl() + ")";
	} else {
		item.style.backgroundImage = "";
	}
	var oThis = this;
	this.click = function(event) {
		if (oThis.enabled) {
			oThis.palette.setActiveTool(oThis);
		}
		event.cancelBubble = true;
		event.returnValue = false;
	};
	if (item.addEventListener) {
		item.addEventListener("click", this.click, false);
	} else {
		if (item.attachEvent) {
			item.attachEvent("onclick", this.click);
		}
	}
	if (this.tooltip !== null) {
		item.title = this.tooltip;
	} else {
		item.title = "";
	}
	return item;
};
draw2d.ToolGeneric.prototype.getHTMLElement = function() {
	if (this.html === null) {
		this.html = this.createHTMLElement();
	}
	return this.html;
};
draw2d.ToolGeneric.prototype.execute = function(x, y) {
	if (this.enabled) {
		this.palette.setActiveTool(null);
	}
};
draw2d.ToolGeneric.prototype.setTooltip = function(_2600) {
	this.tooltip = _2600;
	if (this.tooltip !== null) {
		this.html.title = this.tooltip;
	} else {
		this.html.title = "";
	}
};
draw2d.ToolGeneric.prototype.setActive = function(flag) {
	if (!this.enabled) {
		return;
	}
	if (flag === true) {
		this.html.style.border = "1px inset";
	} else {
		this.html.style.border = "0px";
	}
};
draw2d.ToolGeneric.prototype.setEnabled = function(flag) {
	this.enabled = flag;
	if (flag) {
		this.html.style.filter = "alpha(opacity=100)";
		this.html.style.opacity = "1.0";
	} else {
		this.html.style.filter = "alpha(opacity=30)";
		this.html.style.opacity = "0.3";
	}
};
draw2d.ToolGeneric.prototype.setDimension = function(w, h) {
	this.width = w;
	this.height = h;
	if (this.html === null) {
		return;
	}
	this.html.style.width = this.width + "px";
	this.html.style.height = this.height + "px";
};
draw2d.ToolGeneric.prototype.setPosition = function(xPos, yPos) {
	this.x = Math.max(0, xPos);
	this.y = Math.max(0, yPos);
	if (this.html === null) {
		return;
	}
	this.html.style.left = this.x + "px";
	this.html.style.top = this.y + "px";
};
draw2d.ToolGeneric.prototype.getWidth = function() {
	return this.width;
};
draw2d.ToolGeneric.prototype.getHeight = function() {
	return this.height;
};
draw2d.ToolGeneric.prototype.getY = function() {
	return this.y;
};
draw2d.ToolGeneric.prototype.getX = function() {
	return this.x;
};
draw2d.ToolGeneric.prototype.getPosition = function() {
	return new draw2d.Point(this.x, this.y);
};
draw2d.ToolPalette = function(title) {
	draw2d.WindowFigure.call(this, title);
	this.setDimension(75, 400);
	this.activeTool = null;
	this.children = {};
};
draw2d.ToolPalette.prototype = new draw2d.WindowFigure();
draw2d.ToolPalette.prototype.type = "draw2d.ToolPalette";
draw2d.ToolPalette.prototype.dispose = function() {
	draw2d.WindowFigure.prototype.dispose.call(this);
};
draw2d.ToolPalette.prototype.createHTMLElement = function() {
	var item = draw2d.WindowFigure.prototype.createHTMLElement.call(this);
	this.scrollarea = document.createElement("div");
	this.scrollarea.style.position = "absolute";
	this.scrollarea.style.left = "0px";
	if (this.hasTitleBar()) {
		this.scrollarea.style.top = "15px";
	} else {
		this.scrollarea.style.top = "0px";
	}
	this.scrollarea.style.width = this.getWidth() + "px";
	this.scrollarea.style.height = "15px";
	this.scrollarea.style.margin = "0px";
	this.scrollarea.style.padding = "0px";
	this.scrollarea.style.font = "normal 10px verdana";
	this.scrollarea.style.borderBottom = "2px solid gray";
	this.scrollarea.style.whiteSpace = "nowrap";
	this.scrollarea.style.textAlign = "center";
	this.scrollarea.style.overflowX = "auto";
	this.scrollarea.style.overflowY = "auto";
	this.scrollarea.style.overflow = "auto";
	item.appendChild(this.scrollarea);
	return item;
};
draw2d.ToolPalette.prototype.setDimension = function(w, h) {
	draw2d.WindowFigure.prototype.setDimension.call(this, w, h);
	if (this.scrollarea !== null) {
		this.scrollarea.style.width = this.getWidth() + "px";
		if (this.hasTitleBar()) {
			this.scrollarea.style.height = (this.getHeight() - 15) + "px";
		} else {
			this.scrollarea.style.height = this.getHeight() + "px";
		}
	}
};
draw2d.ToolPalette.prototype.addChild = function(item) {
	this.children[item.id] = item;
	this.scrollarea.appendChild(item.getHTMLElement());
};
draw2d.ToolPalette.prototype.getChild = function(id) {
	return this.children[id];
};
draw2d.ToolPalette.prototype.getActiveTool = function() {
	return this.activeTool;
};
draw2d.ToolPalette.prototype.setActiveTool = function(tool) {
	if (this.activeTool != tool && this.activeTool !== null) {
		this.activeTool.setActive(false);
	}
	if (tool !== null) {
		tool.setActive(true);
	}
	this.activeTool = tool;
};
draw2d.Dialog = function(title) {
	this.buttonbar = null;
	if (title) {
		draw2d.WindowFigure.call(this, title);
	} else {
		draw2d.WindowFigure.call(this, "Dialog");
	}
	this.setDimension(400, 300);
};
draw2d.Dialog.prototype = new draw2d.WindowFigure();
draw2d.Dialog.prototype.type = "draw2d.Dialog";
draw2d.Dialog.prototype.createHTMLElement = function() {
	var item = draw2d.WindowFigure.prototype.createHTMLElement.call(this);
	var oThis = this;
	this.buttonbar = document.createElement("div");
	this.buttonbar.style.position = "absolute";
	this.buttonbar.style.left = "0px";
	this.buttonbar.style.bottom = "0px";
	this.buttonbar.style.width = this.getWidth() + "px";
	this.buttonbar.style.height = "30px";
	this.buttonbar.style.margin = "0px";
	this.buttonbar.style.padding = "0px";
	this.buttonbar.style.font = "normal 10px verdana";
	this.buttonbar.style.backgroundColor = "#c0c0c0";
	this.buttonbar.style.borderBottom = "2px solid gray";
	this.buttonbar.style.whiteSpace = "nowrap";
	this.buttonbar.style.textAlign = "center";
	this.buttonbar.className = "Dialog_buttonbar";
	this.okbutton = document.createElement("button");
	this.okbutton.style.border = "1px solid gray";
	this.okbutton.style.font = "normal 10px verdana";
	this.okbutton.style.width = "80px";
	this.okbutton.style.margin = "5px";
	this.okbutton.className = "Dialog_okbutton";
	this.okbutton.innerHTML = "Ok";
	this.okbutton.onclick = function() {
		var error = null;
		try {
			oThis.onOk();
		} catch (e) {
			error = e;
		}
		oThis.workflow.removeFigure(oThis);
		if (error !== null) {
			throw error;
		}
	};
	this.buttonbar.appendChild(this.okbutton);
	this.cancelbutton = document.createElement("button");
	this.cancelbutton.innerHTML = "Cancel";
	this.cancelbutton.style.font = "normal 10px verdana";
	this.cancelbutton.style.border = "1px solid gray";
	this.cancelbutton.style.width = "80px";
	this.cancelbutton.style.margin = "5px";
	this.cancelbutton.className = "Dialog_cancelbutton";
	this.cancelbutton.onclick = function() {
		var error = null;
		try {
			oThis.onCancel();
		} catch (e) {
			error = e;
		}
		oThis.workflow.removeFigure(oThis);
		if (error !== null) {
			throw error;
		}
	};
	this.buttonbar.appendChild(this.cancelbutton);
	item.appendChild(this.buttonbar);
	return item;
};
draw2d.Dialog.prototype.onOk = function() {
};
draw2d.Dialog.prototype.onCancel = function() {
};
draw2d.Dialog.prototype.setDimension = function(w, h) {
	draw2d.WindowFigure.prototype.setDimension.call(this, w, h);
	if (this.buttonbar !== null) {
		this.buttonbar.style.width = this.getWidth() + "px";
	}
};
draw2d.Dialog.prototype.setWorkflow = function(_1ee8) {
	draw2d.WindowFigure.prototype.setWorkflow.call(this, _1ee8);
	this.setFocus();
};
draw2d.Dialog.prototype.setFocus = function() {
};
draw2d.Dialog.prototype.onSetDocumentDirty = function() {
};
draw2d.InputDialog = function() {
	draw2d.Dialog.call(this);
	this.setDimension(400, 100);
};
draw2d.InputDialog.prototype = new draw2d.Dialog();
draw2d.InputDialog.prototype.type = "draw2d.InputDialog";
draw2d.InputDialog.prototype.createHTMLElement = function() {
	var item = draw2d.Dialog.prototype.createHTMLElement.call(this);
	return item;
};
draw2d.InputDialog.prototype.onOk = function() {
	this.workflow.removeFigure(this);
};
draw2d.InputDialog.prototype.onCancel = function() {
	this.workflow.removeFigure(this);
};
draw2d.PropertyDialog = function(_27cc, _27cd, label) {
	this.figure = _27cc;
	this.propertyName = _27cd;
	this.label = label;
	draw2d.Dialog.call(this);
	this.setDimension(400, 120);
};
draw2d.PropertyDialog.prototype = new draw2d.Dialog();
draw2d.PropertyDialog.prototype.type = "draw2d.PropertyDialog";
draw2d.PropertyDialog.prototype.createHTMLElement = function() {
	var item = draw2d.Dialog.prototype.createHTMLElement.call(this);
	var _27d0 = document.createElement("form");
	_27d0.style.position = "absolute";
	_27d0.style.left = "10px";
	_27d0.style.top = "30px";
	_27d0.style.width = "375px";
	_27d0.style.font = "normal 10px verdana";
	item.appendChild(_27d0);
	this.labelDiv = document.createElement("div");
	this.labelDiv.innerHTML = this.label;
	this.disableTextSelection(this.labelDiv);
	_27d0.appendChild(this.labelDiv);
	this.input = document.createElement("input");
	this.input.style.border = "1px solid gray";
	this.input.style.font = "normal 10px verdana";
	this.input.type = "text";
	var value = this.figure.getProperty(this.propertyName);
	if (value) {
		this.input.value = value;
	} else {
		this.input.value = "";
	}
	this.input.style.width = "100%";
	_27d0.appendChild(this.input);
	this.input.focus();
	return item;
};
draw2d.PropertyDialog.prototype.onOk = function() {
	draw2d.Dialog.prototype.onOk.call(this);
	this.figure.setProperty(this.propertyName, this.input.value);
};
draw2d.AnnotationDialog = function(_2688) {
	this.figure = _2688;
	draw2d.Dialog.call(this);
	this.setDimension(400, 100);
};
draw2d.AnnotationDialog.prototype = new draw2d.Dialog();
draw2d.AnnotationDialog.prototype.type = "draw2d.AnnotationDialog";
draw2d.AnnotationDialog.prototype.createHTMLElement = function() {
	var item = draw2d.Dialog.prototype.createHTMLElement.call(this);
	var _268a = document.createElement("form");
	_268a.style.position = "absolute";
	_268a.style.left = "10px";
	_268a.style.top = "30px";
	_268a.style.width = "375px";
	_268a.style.font = "normal 10px verdana";
	item.appendChild(_268a);
	this.label = document.createTextNode("Text");
	_268a.appendChild(this.label);
	this.input = document.createElement("input");
	this.input.style.border = "1px solid gray";
	this.input.style.font = "normal 10px verdana";
	this.input.type = "text";
	var value = this.figure.getText();
	if (value) {
		this.input.value = value;
	} else {
		this.input.value = "";
	}
	this.input.style.width = "100%";
	_268a.appendChild(this.input);
	this.input.focus();
	return item;
};
draw2d.AnnotationDialog.prototype.onOk = function() {
	this.workflow.getCommandStack().execute(
			new draw2d.CommandSetText(this.figure, this.input.value));
	this.workflow.removeFigure(this);
};
draw2d.PropertyWindow = function() {
	this.currentSelection = null;
	draw2d.WindowFigure.call(this, "Property Window");
	this.setDimension(200, 100);
};
draw2d.PropertyWindow.prototype = new draw2d.WindowFigure();
draw2d.PropertyWindow.prototype.type = "draw2d.PropertyWindow";
draw2d.PropertyWindow.prototype.dispose = function() {
	draw2d.WindowFigure.prototype.dispose.call(this);
};
draw2d.PropertyWindow.prototype.createHTMLElement = function() {
	var item = draw2d.WindowFigure.prototype.createHTMLElement.call(this);
	item.appendChild(this.createLabel("Type:", 15, 25));
	item.appendChild(this.createLabel("X :", 15, 50));
	item.appendChild(this.createLabel("Y :", 15, 70));
	item.appendChild(this.createLabel("Width :", 85, 50));
	item.appendChild(this.createLabel("Height :", 85, 70));
	this.labelType = this.createLabel("", 50, 25);
	this.labelX = this.createLabel("", 40, 50);
	this.labelY = this.createLabel("", 40, 70);
	this.labelWidth = this.createLabel("", 135, 50);
	this.labelHeight = this.createLabel("", 135, 70);
	this.labelType.style.fontWeight = "normal";
	this.labelX.style.fontWeight = "normal";
	this.labelY.style.fontWeight = "normal";
	this.labelWidth.style.fontWeight = "normal";
	this.labelHeight.style.fontWeight = "normal";
	item.appendChild(this.labelType);
	item.appendChild(this.labelX);
	item.appendChild(this.labelY);
	item.appendChild(this.labelWidth);
	item.appendChild(this.labelHeight);
	return item;
};
draw2d.PropertyWindow.prototype.onSelectionChanged = function(_1a8c) {
	draw2d.WindowFigure.prototype.onSelectionChanged.call(this, _1a8c);
	if (this.currentSelection !== null) {
		this.currentSelection.detachMoveListener(this);
	}
	this.currentSelection = _1a8c;
	if (_1a8c !== null && _1a8c != this) {
		this.labelType.innerHTML = _1a8c.type;
		if (_1a8c.getX) {
			this.labelX.innerHTML = _1a8c.getX();
			this.labelY.innerHTML = _1a8c.getY();
			this.labelWidth.innerHTML = _1a8c.getWidth();
			this.labelHeight.innerHTML = _1a8c.getHeight();
			this.currentSelection = _1a8c;
			this.currentSelection.attachMoveListener(this);
		} else {
			this.labelX.innerHTML = "";
			this.labelY.innerHTML = "";
			this.labelWidth.innerHTML = "";
			this.labelHeight.innerHTML = "";
		}
	} else {
		this.labelType.innerHTML = "&lt;none&gt;";
		this.labelX.innerHTML = "";
		this.labelY.innerHTML = "";
		this.labelWidth.innerHTML = "";
		this.labelHeight.innerHTML = "";
	}
};
draw2d.PropertyWindow.prototype.getCurrentSelection = function() {
	return this.currentSelection;
};
draw2d.PropertyWindow.prototype.onOtherFigureMoved = function(_1a8d) {
	if (_1a8d == this.currentSelection) {
		this.onSelectionChanged(_1a8d);
	}
};
draw2d.PropertyWindow.prototype.createLabel = function(text, x, y) {
	var l = document.createElement("div");
	l.style.position = "absolute";
	l.style.left = x + "px";
	l.style.top = y + "px";
	l.style.font = "normal 10px verdana";
	l.style.whiteSpace = "nowrap";
	l.style.fontWeight = "bold";
	l.innerHTML = text;
	this.disableTextSelection(l);
	return l;
};
draw2d.ColorDialog = function() {
	this.maxValue = {
		"h" : "359",
		"s" : "100",
		"v" : "100"
	};
	this.HSV = {
		0 : 359,
		1 : 100,
		2 : 100
	};
	this.slideHSV = {
		0 : 359,
		1 : 100,
		2 : 100
	};
	this.SVHeight = 165;
	this.wSV = 162;
	this.wH = 162;
	draw2d.Dialog.call(this, "Color Chooser");
	this.loadSV();
	this.setColor(new draw2d.Color(255, 0, 0));
	this.setDimension(219, 244);
};
draw2d.ColorDialog.prototype = new draw2d.Dialog();
draw2d.ColorDialog.prototype.type = "draw2d.ColorDialog";
draw2d.ColorDialog.prototype.createHTMLElement = function() {
	var oThis = this;
	var item = draw2d.Dialog.prototype.createHTMLElement.call(this);
	this.outerDiv = document.createElement("div");
	this.outerDiv.id = "plugin";
	this.outerDiv.style.top = "15px";
	this.outerDiv.style.left = "0px";
	this.outerDiv.style.width = "201px";
	this.outerDiv.style.position = "absolute";
	this.outerDiv.style.padding = "9px";
	this.outerDiv.display = "block";
	this.outerDiv.style.background = "#0d0d0d";
	this.plugHEX = document.createElement("div");
	this.plugHEX.id = "plugHEX";
	this.plugHEX.innerHTML = "F1FFCC";
	this.plugHEX.style.color = "white";
	this.plugHEX.style.font = "normal 10px verdana";
	this.outerDiv.appendChild(this.plugHEX);
	this.SV = document.createElement("div");
	this.SV.onmousedown = function(event) {
		oThis.mouseDownSV(oThis.SVslide, event);
	};
	this.SV.id = "SV";
	this.SV.style.cursor = "crosshair";
	this.SV.style.background = "#FF0000 url(SatVal.png)";
	this.SV.style.position = "absolute";
	this.SV.style.height = "166px";
	this.SV.style.width = "167px";
	this.SV.style.marginRight = "10px";
	this.SV.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='SatVal.png', sizingMethod='scale')";
	this.SV.style["float"] = "left";
	this.outerDiv.appendChild(this.SV);
	this.SVslide = document.createElement("div");
	this.SVslide.onmousedown = function(event) {
		oThis.mouseDownSV(event);
	};
	this.SVslide.style.top = "40px";
	this.SVslide.style.left = "40px";
	this.SVslide.style.position = "absolute";
	this.SVslide.style.cursor = "crosshair";
	this.SVslide.style.background = "url(slide.gif)";
	this.SVslide.style.height = "9px";
	this.SVslide.style.width = "9px";
	this.SVslide.style.lineHeight = "1px";
	this.outerDiv.appendChild(this.SVslide);
	this.H = document.createElement("form");
	this.H.id = "H";
	this.H.onmousedown = function(event) {
		oThis.mouseDownH(event);
	};
	this.H.style.border = "1px solid #000000";
	this.H.style.cursor = "crosshair";
	this.H.style.position = "absolute";
	this.H.style.width = "19px";
	this.H.style.top = "28px";
	this.H.style.left = "191px";
	this.outerDiv.appendChild(this.H);
	this.Hslide = document.createElement("div");
	this.Hslide.style.top = "-7px";
	this.Hslide.style.left = "-8px";
	this.Hslide.style.background = "url(slideHue.gif)";
	this.Hslide.style.height = "5px";
	this.Hslide.style.width = "33px";
	this.Hslide.style.position = "absolute";
	this.Hslide.style.lineHeight = "1px";
	this.H.appendChild(this.Hslide);
	this.Hmodel = document.createElement("div");
	this.Hmodel.style.height = "1px";
	this.Hmodel.style.width = "19px";
	this.Hmodel.style.lineHeight = "1px";
	this.Hmodel.style.margin = "0px";
	this.Hmodel.style.padding = "0px";
	this.Hmodel.style.fontSize = "1px";
	this.H.appendChild(this.Hmodel);
	item.appendChild(this.outerDiv);
	return item;
};
draw2d.ColorDialog.prototype.onOk = function() {
	draw2d.Dialog.prototype.onOk.call(this);
};
draw2d.browser = function(v) {
	return (Math.max(navigator.userAgent.toLowerCase().indexOf(v), 0));
};
draw2d.ColorDialog.prototype.showColor = function(c) {
	this.plugHEX.style.background = "#" + c;
	this.plugHEX.innerHTML = c;
};
draw2d.ColorDialog.prototype.getSelectedColor = function() {
	var rgb = this.hex2rgb(this.plugHEX.innerHTML);
	return new draw2d.Color(rgb[0], rgb[1], rgb[2]);
};
draw2d.ColorDialog.prototype.setColor = function(color) {
	if (color === null) {
		color = new draw2d.Color(100, 100, 100);
	}
	var hex = this.rgb2hex(Array(color.getRed(), color.getGreen(), color
			.getBlue()));
	this.updateH(hex);
};
draw2d.ColorDialog.prototype.XY = function(e, v) {
	var z = draw2d.browser("msie") ? Array(event.clientX
			+ document.body.scrollLeft, event.clientY + document.body.scrollTop)
			: Array(e.pageX, e.pageY);
	return z[v];
};
draw2d.ColorDialog.prototype.mkHSV = function(a, b, c) {
	return (Math.min(a, Math.max(0, Math.ceil((parseInt(c) / b) * a))));
};
draw2d.ColorDialog.prototype.ckHSV = function(a, b) {
	if (a >= 0 && a <= b) {
		return (a);
	} else {
		if (a > b) {
			return (b);
		} else {
			if (a < 0) {
				return ("-" + oo);
			}
		}
	}
};
draw2d.ColorDialog.prototype.mouseDownH = function(e) {
	this.slideHSV[0] = this.HSV[0];
	var oThis = this;
	this.H.onmousemove = function(e) {
		oThis.dragH(e);
	};
	this.H.onmouseup = function(e) {
		oThis.H.onmousemove = "";
		oThis.H.onmouseup = "";
	};
	this.dragH(e);
};
draw2d.ColorDialog.prototype.dragH = function(e) {
	var y = this.XY(e, 1) - this.getY() - 40;
	this.Hslide.style.top = (this.ckHSV(y, this.wH) - 5) + "px";
	this.slideHSV[0] = this.mkHSV(359, this.wH, this.Hslide.style.top);
	this.updateSV();
	this.showColor(this.commit());
	this.SV.style.backgroundColor = "#"
			+ this.hsv2hex(Array(this.HSV[0], 100, 100));
};
draw2d.ColorDialog.prototype.mouseDownSV = function(o, e) {
	this.slideHSV[0] = this.HSV[0];
	var oThis = this;
	function reset() {
		oThis.SV.onmousemove = "";
		oThis.SV.onmouseup = "";
		oThis.SVslide.onmousemove = "";
		oThis.SVslide.onmouseup = "";
	}
	this.SV.onmousemove = function(e) {
		oThis.dragSV(e);
	};
	this.SV.onmouseup = reset;
	this.SVslide.onmousemove = function(e) {
		oThis.dragSV(e);
	};
	this.SVslide.onmouseup = reset;
	this.dragSV(e);
};
draw2d.ColorDialog.prototype.dragSV = function(e) {
	var x = this.XY(e, 0) - this.getX() - 1;
	var y = this.XY(e, 1) - this.getY() - 20;
	this.SVslide.style.left = this.ckHSV(x, this.wSV) + "px";
	this.SVslide.style.top = this.ckHSV(y, this.wSV) + "px";
	this.slideHSV[1] = this.mkHSV(100, this.wSV, this.SVslide.style.left);
	this.slideHSV[2] = 100 - this.mkHSV(100, this.wSV, this.SVslide.style.top);
	this.updateSV();
};
draw2d.ColorDialog.prototype.commit = function() {
	var r = "hsv";
	var z = {};
	var j = "";
	for ( var i = 0; i <= r.length - 1; i++) {
		j = r.substr(i, 1);
		z[i] = (j == "h") ? this.maxValue[j]
				- this.mkHSV(this.maxValue[j], this.wH, this.Hslide.style.top)
				: this.HSV[i];
	}
	return (this.updateSV(this.hsv2hex(z)));
};
draw2d.ColorDialog.prototype.updateSV = function(v) {
	this.HSV = v ? this.hex2hsv(v) : Array(this.slideHSV[0], this.slideHSV[1],
			this.slideHSV[2]);
	if (!v) {
		v = this.hsv2hex(Array(this.slideHSV[0], this.slideHSV[1],
				this.slideHSV[2]));
	}
	this.showColor(v);
	return v;
};
draw2d.ColorDialog.prototype.loadSV = function() {
	var z = "";
	for ( var i = this.SVHeight; i >= 0; i--) {
		z += "<div style=\"background:#"
				+ this.hsv2hex(Array(Math.round((359 / this.SVHeight) * i),
						100, 100)) + ";\"><br/></div>";
	}
	this.Hmodel.innerHTML = z;
};
draw2d.ColorDialog.prototype.updateH = function(v) {
	this.plugHEX.innerHTML = v;
	this.HSV = this.hex2hsv(v);
	this.SV.style.backgroundColor = "#"
			+ this.hsv2hex(Array(this.HSV[0], 100, 100));
	this.SVslide.style.top = (parseInt(this.wSV - this.wSV
			* (this.HSV[1] / 100)) + 20)
			+ "px";
	this.SVslide.style.left = (parseInt(this.wSV * (this.HSV[1] / 100)) + 5)
			+ "px";
	this.Hslide.style.top = (parseInt(this.wH
			* ((this.maxValue["h"] - this.HSV[0]) / this.maxValue["h"])) - 7)
			+ "px";
};
draw2d.ColorDialog.prototype.toHex = function(v) {
	v = Math.round(Math.min(Math.max(0, v), 255));
	return ("0123456789ABCDEF".charAt((v - v % 16) / 16) + "0123456789ABCDEF"
			.charAt(v % 16));
};
draw2d.ColorDialog.prototype.hex2rgb = function(r) {
	return ({
		0 : parseInt(r.substr(0, 2), 16),
		1 : parseInt(r.substr(2, 2), 16),
		2 : parseInt(r.substr(4, 2), 16)
	});
};
draw2d.ColorDialog.prototype.rgb2hex = function(r) {
	return (this.toHex(r[0]) + this.toHex(r[1]) + this.toHex(r[2]));
};
draw2d.ColorDialog.prototype.hsv2hex = function(h) {
	return (this.rgb2hex(this.hsv2rgb(h)));
};
draw2d.ColorDialog.prototype.hex2hsv = function(v) {
	return (this.rgb2hsv(this.hex2rgb(v)));
};
draw2d.ColorDialog.prototype.rgb2hsv = function(r) {
	var max = Math.max(r[0], r[1], r[2]);
	var delta = max - Math.min(r[0], r[1], r[2]);
	var H;
	var S;
	var V;
	if (max != 0) {
		S = Math.round(delta / max * 100);
		if (r[0] == max) {
			H = (r[1] - r[2]) / delta;
		} else {
			if (r[1] == max) {
				H = 2 + (r[2] - r[0]) / delta;
			} else {
				if (r[2] == max) {
					H = 4 + (r[0] - r[1]) / delta;
				}
			}
		}
		var H = Math.min(Math.round(H * 60), 360);
		if (H < 0) {
			H += 360;
		}
	}
	return ({
		0 : H ? H : 0,
		1 : S ? S : 0,
		2 : Math.round((max / 255) * 100)
	});
};
draw2d.ColorDialog.prototype.hsv2rgb = function(r) {
	var R;
	var B;
	var G;
	var S = r[1] / 100;
	var V = r[2] / 100;
	var H = r[0] / 360;
	if (S > 0) {
		if (H >= 1) {
			H = 0;
		}
		H = 6 * H;
		F = H - Math.floor(H);
		A = Math.round(255 * V * (1 - S));
		B = Math.round(255 * V * (1 - (S * F)));
		C = Math.round(255 * V * (1 - (S * (1 - F))));
		V = Math.round(255 * V);
		switch (Math.floor(H)) {
		case 0:
			R = V;
			G = C;
			B = A;
			break;
		case 1:
			R = B;
			G = V;
			B = A;
			break;
		case 2:
			R = A;
			G = V;
			B = C;
			break;
		case 3:
			R = A;
			G = B;
			B = V;
			break;
		case 4:
			R = C;
			G = A;
			B = V;
			break;
		case 5:
			R = V;
			G = A;
			B = B;
			break;
		}
		return ({
			0 : R ? R : 0,
			1 : G ? G : 0,
			2 : B ? B : 0
		});
	} else {
		return ({
			0 : (V = Math.round(V * 255)),
			1 : V,
			2 : V
		});
	}
};
draw2d.LineColorDialog = function(_2065) {
	draw2d.ColorDialog.call(this);
	this.figure = _2065;
	var color = _2065.getColor();
	this.updateH(this
			.rgb2hex(color.getRed(), color.getGreen(), color.getBlue()));
};
draw2d.LineColorDialog.prototype = new draw2d.ColorDialog();
draw2d.LineColorDialog.prototype.type = "draw2d.LineColorDialog";
draw2d.LineColorDialog.prototype.onOk = function() {
	var _2067 = this.workflow;
	draw2d.ColorDialog.prototype.onOk.call(this);
	if (typeof this.figure.setColor == "function") {
		_2067.getCommandStack()
				.execute(
						new draw2d.CommandSetColor(this.figure, this
								.getSelectedColor()));
		if (_2067.getCurrentSelection() == this.figure) {
			_2067.setCurrentSelection(this.figure);
		}
	}
};
draw2d.BackgroundColorDialog = function(_1d56) {
	draw2d.ColorDialog.call(this);
	this.figure = _1d56;
	var color = _1d56.getBackgroundColor();
	if (color !== null) {
		this.updateH(this.rgb2hex(color.getRed(), color.getGreen(), color
				.getBlue()));
	}
};
draw2d.BackgroundColorDialog.prototype = new draw2d.ColorDialog();
draw2d.BackgroundColorDialog.prototype.type = "draw2d.BackgroundColorDialog";
draw2d.BackgroundColorDialog.prototype.onOk = function() {
	var _1d58 = this.workflow;
	draw2d.ColorDialog.prototype.onOk.call(this);
	if (typeof this.figure.setBackgroundColor == "function") {
		_1d58.getCommandStack().execute(
				new draw2d.CommandSetBackgroundColor(this.figure, this
						.getSelectedColor()));
		if (_1d58.getCurrentSelection() == this.figure) {
			_1d58.setCurrentSelection(this.figure);
		}
	}
};
draw2d.AnnotationDialog = function(_2688) {
	this.figure = _2688;
	draw2d.Dialog.call(this);
	this.setDimension(400, 100);
};
draw2d.AnnotationDialog.prototype = new draw2d.Dialog();
draw2d.AnnotationDialog.prototype.type = "draw2d.AnnotationDialog";
draw2d.AnnotationDialog.prototype.createHTMLElement = function() {
	var item = draw2d.Dialog.prototype.createHTMLElement.call(this);
	var _268a = document.createElement("form");
	_268a.style.position = "absolute";
	_268a.style.left = "10px";
	_268a.style.top = "30px";
	_268a.style.width = "375px";
	_268a.style.font = "normal 10px verdana";
	item.appendChild(_268a);
	this.label = document.createTextNode("Text");
	_268a.appendChild(this.label);
	this.input = document.createElement("input");
	this.input.style.border = "1px solid gray";
	this.input.style.font = "normal 10px verdana";
	this.input.type = "text";
	var value = this.figure.getText();
	if (value) {
		this.input.value = value;
	} else {
		this.input.value = "";
	}
	this.input.style.width = "100%";
	_268a.appendChild(this.input);
	this.input.focus();
	return item;
};
draw2d.AnnotationDialog.prototype.onOk = function() {
	this.workflow.getCommandStack().execute(
			new draw2d.CommandSetText(this.figure, this.input.value));
	this.workflow.removeFigure(this);
};
draw2d.Command = function(label) {
	this.label = label;
};
draw2d.Command.prototype.type = "draw2d.Command";
draw2d.Command.prototype.getLabel = function() {
	return this.label;
};
draw2d.Command.prototype.canExecute = function() {
	return true;
};
draw2d.Command.prototype.execute = function() {
};
draw2d.Command.prototype.cancel = function() {
};
draw2d.Command.prototype.undo = function() {
};
draw2d.Command.prototype.redo = function() {
};
draw2d.CommandStack = function() {
	this.undostack = [];
	this.redostack = [];
	this.maxundo = 50;
	this.eventListeners = new draw2d.ArrayList();
};
draw2d.CommandStack.PRE_EXECUTE = 1;
draw2d.CommandStack.PRE_REDO = 2;
draw2d.CommandStack.PRE_UNDO = 4;
draw2d.CommandStack.POST_EXECUTE = 8;
draw2d.CommandStack.POST_REDO = 16;
draw2d.CommandStack.POST_UNDO = 32;
draw2d.CommandStack.POST_MASK = draw2d.CommandStack.POST_EXECUTE
		| draw2d.CommandStack.POST_UNDO | draw2d.CommandStack.POST_REDO;
draw2d.CommandStack.PRE_MASK = draw2d.CommandStack.PRE_EXECUTE
		| draw2d.CommandStack.PRE_UNDO | draw2d.CommandStack.PRE_REDO;
draw2d.CommandStack.prototype.type = "draw2d.CommandStack";
draw2d.CommandStack.prototype.setUndoLimit = function(count) {
	this.maxundo = count;
};
draw2d.CommandStack.prototype.markSaveLocation = function() {
	this.undostack = [];
	this.redostack = [];
};
draw2d.CommandStack.prototype.execute = function(_2807) {
	if (_2807 === null) {
		return;
	}
	if (_2807.canExecute() == false) {
		return;
	}
	this.notifyListeners(_2807, draw2d.CommandStack.PRE_EXECUTE);
	this.undostack.push(_2807);
	_2807.execute();
	this.redostack = [];
	if (this.undostack.length > this.maxundo) {
		this.undostack = this.undostack.slice(this.undostack.length
				- this.maxundo);
	}
	this.notifyListeners(_2807, draw2d.CommandStack.POST_EXECUTE);
};
draw2d.CommandStack.prototype.undo = function() {
	var _2808 = this.undostack.pop();
	if (_2808) {
		this.notifyListeners(_2808, draw2d.CommandStack.PRE_UNDO);
		this.redostack.push(_2808);
		_2808.undo();
		this.notifyListeners(_2808, draw2d.CommandStack.POST_UNDO);
	}
};
draw2d.CommandStack.prototype.redo = function() {
	var _2809 = this.redostack.pop();
	if (_2809) {
		this.notifyListeners(_2809, draw2d.CommandStack.PRE_REDO);
		this.undostack.push(_2809);
		_2809.redo();
		this.notifyListeners(_2809, draw2d.CommandStack.POST_REDO);
	}
};
draw2d.CommandStack.prototype.getRedoLabel = function() {
	if (this.redostack.lenght === 0) {
		return "";
	}
	var _280a = this.redostack[this.redostack.length - 1];
	if (_280a) {
		return _280a.getLabel();
	}
	return "";
};
draw2d.CommandStack.prototype.getUndoLabel = function() {
	if (this.undostack.lenght === 0) {
		return "";
	}
	var _280b = this.undostack[this.undostack.length - 1];
	if (_280b) {
		return _280b.getLabel();
	}
	return "";
};
draw2d.CommandStack.prototype.canRedo = function() {
	return this.redostack.length > 0;
};
draw2d.CommandStack.prototype.canUndo = function() {
	return this.undostack.length > 0;
};
draw2d.CommandStack.prototype.addCommandStackEventListener = function(_280c) {
	if (_280c instanceof draw2d.CommandStackEventListener) {
		this.eventListeners.add(_280c);
	} else {
		throw "Object doesn't implement required callback interface [draw2d.CommandStackListener]";
	}
};
draw2d.CommandStack.prototype.removeCommandStackEventListener = function(_280d) {
	this.eventListeners.remove(_280d);
};
draw2d.CommandStack.prototype.notifyListeners = function(_280e, state) {
	var event = new draw2d.CommandStackEvent(_280e, state);
	var size = this.eventListeners.getSize();
	for ( var i = 0; i < size; i++) {
		this.eventListeners.get(i).stackChanged(event);
	}
};
draw2d.CommandStackEvent = function(_2119, _211a) {
	this.command = _2119;
	this.details = _211a;
};
draw2d.CommandStackEvent.prototype.type = "draw2d.CommandStackEvent";
draw2d.CommandStackEvent.prototype.getCommand = function() {
	return this.command;
};
draw2d.CommandStackEvent.prototype.getDetails = function() {
	return this.details;
};
draw2d.CommandStackEvent.prototype.isPostChangeEvent = function() {
	return 0 != (this.getDetails() & draw2d.CommandStack.POST_MASK);
};
draw2d.CommandStackEvent.prototype.isPreChangeEvent = function() {
	return 0 != (this.getDetails() & draw2d.CommandStack.PRE_MASK);
};
draw2d.CommandStackEventListener = function() {
};
draw2d.CommandStackEventListener.prototype.type = "draw2d.CommandStackEventListener";
draw2d.CommandStackEventListener.prototype.stackChanged = function(event) {
};
draw2d.CommandAdd = function(_2ba1, _2ba2, x, y, _2ba5) {
	draw2d.Command.call(this, "add figure");
	if (_2ba5 === undefined) {
		_2ba5 = null;
	}
	this.parent = _2ba5;
	this.figure = _2ba2;
	this.x = x;
	this.y = y;
	this.workflow = _2ba1;
};
draw2d.CommandAdd.prototype = new draw2d.Command();
draw2d.CommandAdd.prototype.type = "draw2d.CommandAdd";
draw2d.CommandAdd.prototype.execute = function() {
	this.redo();
};
draw2d.CommandAdd.prototype.redo = function() {
	if (this.x && this.y) {
		this.workflow.addFigure(this.figure, this.x, this.y);
	} else {
		this.workflow.addFigure(this.figure);
	}
	this.workflow.setCurrentSelection(this.figure);
	if (this.parent !== null) {
		this.parent.addChild(this.figure);
	}
};
draw2d.CommandAdd.prototype.undo = function() {
	this.workflow.removeFigure(this.figure);
	this.workflow.setCurrentSelection(null);
	if (this.parent !== null) {
		this.parent.removeChild(this.figure);
	}
};
draw2d.CommandDelete = function(_200f) {
	draw2d.Command.call(this, "delete figure");
	this.parent = _200f.parent;
	this.figure = _200f;
	this.workflow = _200f.workflow;
	this.connections = null;
	this.compartmentDeleteCommands = null;
};
draw2d.CommandDelete.prototype = new draw2d.Command();
draw2d.CommandDelete.prototype.type = "draw2d.CommandDelete";
draw2d.CommandDelete.prototype.execute = function() {
	this.redo();
};
draw2d.CommandDelete.prototype.undo = function() {
	if (this.figure instanceof draw2d.CompartmentFigure) {
		for ( var i = 0; i < this.compartmentDeleteCommands.getSize(); i++) {
			var _2011 = this.compartmentDeleteCommands.get(i);
			this.figure.addChild(_2011.figure);
			this.workflow.getCommandStack().undo();
		}
	}
	this.workflow.addFigure(this.figure);
	if (this.figure instanceof draw2d.Connection) {
		this.figure.reconnect();
	}
	this.workflow.setCurrentSelection(this.figure);
	if (this.parent !== null) {
		this.parent.addChild(this.figure);
	}
	for ( var i = 0; i < this.connections.getSize(); ++i) {
		this.workflow.addFigure(this.connections.get(i));
		this.connections.get(i).reconnect();
	}
};
draw2d.CommandDelete.prototype.redo = function() {
	if (this.figure instanceof draw2d.CompartmentFigure) {
		if (this.compartmentDeleteCommands === null) {
			this.compartmentDeleteCommands = new draw2d.ArrayList();
			var _2012 = this.figure.getChildren().clone();
			for ( var i = 0; i < _2012.getSize(); i++) {
				var child = _2012.get(i);
				this.figure.removeChild(child);
				var _2015 = new draw2d.CommandDelete(child);
				this.compartmentDeleteCommands.add(_2015);
				this.workflow.getCommandStack().execute(_2015);
			}
		} else {
			for ( var i = 0; i < this.compartmentDeleteCommands.getSize(); i++) {
				this.workflow.redo();
			}
		}
	}
	this.workflow.removeFigure(this.figure);
	this.workflow.setCurrentSelection(null);
	if (this.figure instanceof draw2d.Node && this.connections === null) {
		this.connections = new draw2d.ArrayList();
		var ports = this.figure.getPorts();
		for ( var i = 0; i < ports.getSize(); i++) {
			var port = ports.get(i);
			for ( var c = 0, c_size = port.getConnections().getSize(); c < c_size; c++) {
				if (!this.connections.contains(port.getConnections().get(c))) {
					this.connections.add(port.getConnections().get(c));
				}
			}
		}
	}
	if (this.connections === null) {
		this.connections = new draw2d.ArrayList();
	}
	if (this.parent !== null) {
		this.parent.removeChild(this.figure);
	}
	for ( var i = 0; i < this.connections.getSize(); ++i) {
		this.workflow.removeFigure(this.connections.get(i));
	}
};
draw2d.CommandMove = function(_2864, x, y) {
	draw2d.Command.call(this, "move figure");
	this.figure = _2864;
	if (x == undefined) {
		this.oldX = _2864.getX();
		this.oldY = _2864.getY();
	} else {
		this.oldX = x;
		this.oldY = y;
	}
	this.oldCompartment = _2864.getParent();
};
draw2d.CommandMove.prototype = new draw2d.Command();
draw2d.CommandMove.prototype.type = "draw2d.CommandMove";
draw2d.CommandMove.prototype.setStartPosition = function(x, y) {
	this.oldX = x;
	this.oldY = y;
};
draw2d.CommandMove.prototype.setPosition = function(x, y) {
	this.newX = x;
	this.newY = y;
	this.newCompartment = this.figure.workflow.getBestCompartmentFigure(x, y,
			this.figure);
};
draw2d.CommandMove.prototype.canExecute = function() {
	return this.newX != this.oldX || this.newY != this.oldY;
};
draw2d.CommandMove.prototype.execute = function() {
	this.redo();
};
draw2d.CommandMove.prototype.undo = function() {
	this.figure.setPosition(this.oldX, this.oldY);
	if (this.newCompartment !== null) {
		this.newCompartment.removeChild(this.figure);
	}
	if (this.oldCompartment !== null) {
		this.oldCompartment.addChild(this.figure);
	}
	this.figure.workflow.moveResizeHandles(this.figure);
};
draw2d.CommandMove.prototype.redo = function() {
	this.figure.setPosition(this.newX, this.newY);
	if (this.oldCompartment !== null) {
		this.oldCompartment.removeChild(this.figure);
	}
	if (this.newCompartment !== null) {
		this.newCompartment.addChild(this.figure);
	}
	this.figure.workflow.moveResizeHandles(this.figure);
};
draw2d.CommandResize = function(_2c0c, width, _2c0e) {
	draw2d.Command.call(this, "resize figure");
	this.figure = _2c0c;
	if (width === undefined) {
		this.oldWidth = _2c0c.getWidth();
		this.oldHeight = _2c0c.getHeight();
	} else {
		this.oldWidth = width;
		this.oldHeight = _2c0e;
	}
};
draw2d.CommandResize.prototype = new draw2d.Command();
draw2d.CommandResize.prototype.type = "draw2d.CommandResize";
draw2d.CommandResize.prototype.setDimension = function(width, _2c10) {
	this.newWidth = width;
	this.newHeight = _2c10;
};
draw2d.CommandResize.prototype.canExecute = function() {
	return this.newWidth != this.oldWidth || this.newHeight != this.oldHeight;
};
draw2d.CommandResize.prototype.execute = function() {
	this.redo();
};
draw2d.CommandResize.prototype.undo = function() {
	this.figure.setDimension(this.oldWidth, this.oldHeight);
	this.figure.workflow.moveResizeHandles(this.figure);
};
draw2d.CommandResize.prototype.redo = function() {
	this.figure.setDimension(this.newWidth, this.newHeight);
	this.figure.workflow.moveResizeHandles(this.figure);
};
draw2d.CommandSetText = function(_1fd6, text) {
	draw2d.Command.call(this, "set text");
	this.figure = _1fd6;
	this.newText = text;
	this.oldText = _1fd6.getText();
};
draw2d.CommandSetText.prototype = new draw2d.Command();
draw2d.CommandSetText.prototype.type = "draw2d.CommandSetText";
draw2d.CommandSetText.prototype.execute = function() {
	this.redo();
};
draw2d.CommandSetText.prototype.redo = function() {
	this.figure.setText(this.newText);
};
draw2d.CommandSetText.prototype.undo = function() {
	this.figure.setText(this.oldText);
};
draw2d.CommandSetColor = function(_288b, color) {
	draw2d.Command.call(this, "set color");
	this.figure = _288b;
	this.newColor = color;
	this.oldColor = _288b.getColor();
};
draw2d.CommandSetColor.prototype = new draw2d.Command();
draw2d.CommandSetColor.prototype.type = "draw2d.CommandSetColor";
draw2d.CommandSetColor.prototype.execute = function() {
	this.redo();
};
draw2d.CommandSetColor.prototype.undo = function() {
	this.figure.setColor(this.oldColor);
};
draw2d.CommandSetColor.prototype.redo = function() {
	this.figure.setColor(this.newColor);
};
draw2d.CommandSetBackgroundColor = function(_200a, color) {
	draw2d.Command.call(this, "set background color");
	this.figure = _200a;
	this.newColor = color;
	this.oldColor = _200a.getBackgroundColor();
};
draw2d.CommandSetBackgroundColor.prototype = new draw2d.Command();
draw2d.CommandSetBackgroundColor.prototype.type = "draw2d.CommandSetBackgroundColor";
draw2d.CommandSetBackgroundColor.prototype.execute = function() {
	this.redo();
};
draw2d.CommandSetBackgroundColor.prototype.undo = function() {
	this.figure.setBackgroundColor(this.oldColor);
};
draw2d.CommandSetBackgroundColor.prototype.redo = function() {
	this.figure.setBackgroundColor(this.newColor);
};
draw2d.CommandConnect = function(_2379, _237a, _237b) {
	draw2d.Command.call(this, "create connection");
	this.workflow = _2379;
	this.source = _237a;
	this.target = _237b;
	this.connection = null;
};
draw2d.CommandConnect.prototype = new draw2d.Command();
draw2d.CommandConnect.prototype.type = "draw2d.CommandConnect";
draw2d.CommandConnect.prototype.setConnection = function(_237c) {
	this.connection = _237c;
};
draw2d.CommandConnect.prototype.execute = function() {
	if (this.connection === null) {
		this.connection = new draw2d.Connection();
	}
	this.connection.setSource(this.source);
	this.connection.setTarget(this.target);
	this.workflow.addFigure(this.connection);
};
draw2d.CommandConnect.prototype.redo = function() {
	this.workflow.addFigure(this.connection);
	this.connection.reconnect();
};
draw2d.CommandConnect.prototype.undo = function() {
	this.workflow.removeFigure(this.connection);
};
draw2d.CommandReconnect = function(con) {
	draw2d.Command.call(this, "reconnect connection");
	this.con = con;
	this.oldSourcePort = con.getSource();
	this.oldTargetPort = con.getTarget();
	this.oldRouter = con.getRouter();
	this.con.setRouter(new draw2d.NullConnectionRouter());
};
draw2d.CommandReconnect.prototype = new draw2d.Command();
draw2d.CommandReconnect.prototype.type = "draw2d.CommandReconnect";
draw2d.CommandReconnect.prototype.canExecute = function() {
	return true;
};
draw2d.CommandReconnect.prototype.setNewPorts = function(_1cef, _1cf0) {
	this.newSourcePort = _1cef;
	this.newTargetPort = _1cf0;
};
draw2d.CommandReconnect.prototype.execute = function() {
	this.redo();
};
draw2d.CommandReconnect.prototype.cancel = function() {
	var start = this.con.sourceAnchor.getLocation(this.con.targetAnchor
			.getReferencePoint());
	var end = this.con.targetAnchor.getLocation(this.con.sourceAnchor
			.getReferencePoint());
	this.con.setStartPoint(start.x, start.y);
	this.con.setEndPoint(end.x, end.y);
	this.con.getWorkflow().showLineResizeHandles(this.con);
	this.con.setRouter(this.oldRouter);
};
draw2d.CommandReconnect.prototype.undo = function() {
	this.con.setSource(this.oldSourcePort);
	this.con.setTarget(this.oldTargetPort);
	this.con.setRouter(this.oldRouter);
	if (this.con.getWorkflow().getCurrentSelection() == this.con) {
		this.con.getWorkflow().showLineResizeHandles(this.con);
	}
};
draw2d.CommandReconnect.prototype.redo = function() {
	this.con.setSource(this.newSourcePort);
	this.con.setTarget(this.newTargetPort);
	this.con.setRouter(this.oldRouter);
	if (this.con.getWorkflow().getCurrentSelection() == this.con) {
		this.con.getWorkflow().showLineResizeHandles(this.con);
	}
};
draw2d.CommandMoveLine = function(line, _2a86, _2a87, endX, endY) {
	draw2d.Command.call(this, "move line");
	this.line = line;
	this.startX1 = _2a86;
	this.startY1 = _2a87;
	this.endX1 = endX;
	this.endY1 = endY;
};
draw2d.CommandMoveLine.prototype = new draw2d.Command();
draw2d.CommandMoveLine.prototype.type = "draw2d.CommandMoveLine";
draw2d.CommandMoveLine.prototype.canExecute = function() {
	return this.startX1 != this.startX2 || this.startY1 != this.startY2
			|| this.endX1 != this.endX2 || this.endY1 != this.endY2;
};
draw2d.CommandMoveLine.prototype.execute = function() {
	this.startX2 = this.line.getStartX();
	this.startY2 = this.line.getStartY();
	this.endX2 = this.line.getEndX();
	this.endY2 = this.line.getEndY();
	this.redo();
};
draw2d.CommandMoveLine.prototype.undo = function() {
	this.line.setStartPoint(this.startX1, this.startY1);
	this.line.setEndPoint(this.endX1, this.endY1);
	if (this.line.workflow.getCurrentSelection() == this.line) {
		this.line.workflow.showLineResizeHandles(this.line);
	}
};
draw2d.CommandMoveLine.prototype.redo = function() {
	this.line.setStartPoint(this.startX2, this.startY2);
	this.line.setEndPoint(this.endX2, this.endY2);
	if (this.line.workflow.getCurrentSelection() == this.line) {
		this.line.workflow.showLineResizeHandles(this.line);
	}
};
draw2d.CommandMovePort = function(port) {
	draw2d.Command.call(this, "move port");
	this.port = port;
};
draw2d.CommandMovePort.prototype = new draw2d.Command();
draw2d.CommandMovePort.prototype.type = "draw2d.CommandMovePort";
draw2d.CommandMovePort.prototype.execute = function() {
	this.port.setAlpha(1);
	this.port.setPosition(this.port.originX, this.port.originY);
	this.port.parentNode.workflow.hideConnectionLine();
};
draw2d.CommandMovePort.prototype.undo = function() {
};
draw2d.CommandMovePort.prototype.redo = function() {
};
draw2d.CommandMovePort.prototype.setPosition = function(x, y) {
};
draw2d.Menu = function() {
	this.menuItems = new draw2d.ArrayList();
	draw2d.Figure.call(this);
	this.setSelectable(false);
	this.setDeleteable(false);
	this.setCanDrag(false);
	this.setResizeable(false);
	this.setSelectable(false);
	this.setZOrder(10000);
	this.dirty = false;
};
draw2d.Menu.prototype = new draw2d.Figure();
draw2d.Menu.prototype.type = "draw2d.Menu";
draw2d.Menu.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.style.position = "absolute";
	item.style.left = this.x + "px";
	item.style.top = this.y + "px";
	item.style.margin = "0px";
	item.style.padding = "0px";
	item.style.zIndex = "" + draw2d.Figure.ZOrderBaseIndex;
	item.style.border = "1px solid gray";
	item.style.background = "lavender";
	item.style.cursor = "pointer";
	item.style.width = "auto";
	item.style.height = "auto";
	item.style.boxShadow = "5px 5px 5px #ccc";
	item.style.borderRadius = "2px";
	item.className = "Menu";
	return item;
};
draw2d.Menu.prototype.setWorkflow = function(_1763) {
	this.workflow = _1763;
};
draw2d.Menu.prototype.setDimension = function(w, h) {
};
draw2d.Menu.prototype.appendMenuItem = function(item) {
	this.menuItems.add(item);
	item.parentMenu = this;
	this.dirty = true;
};
draw2d.Menu.prototype.getHTMLElement = function() {
	var html = draw2d.Figure.prototype.getHTMLElement.call(this);
	if (this.dirty) {
		this.createList();
	}
	return html;
};
draw2d.Menu.prototype.createList = function() {
	this.dirty = false;
	this.html.innerHTML = "";
	var oThis = this;
	for ( var i = 0; i < this.menuItems.getSize(); i++) {
		var item = this.menuItems.get(i);
		var li = document.createElement("a");
		li.innerHTML = item.getLabel();
		li.style.display = "block";
		li.style.fontFamily = "Verdana, Arial, Helvetica, sans-serif";
		li.style.fontSize = "9pt";
		li.style.color = "dimgray";
		li.style.borderBottom = "1px solid silver";
		li.style.paddingLeft = "5px";
		li.style.paddingRight = "5px";
		li.style.whiteSpace = "nowrap";
		li.style.cursor = "pointer";
		li.className = "MenuItem";
		this.html.appendChild(li);
		li.menuItem = item;
		if (li.addEventListener) {
			li.addEventListener("click", function(event) {
				var _176d = arguments[0] || window.event;
				_176d.cancelBubble = true;
				_176d.returnValue = false;
				var diffX = _176d.clientX;
				var diffY = _176d.clientY;
				var _1770 = document.body.parentNode.scrollLeft;
				var _1771 = document.body.parentNode.scrollTop;
				this.menuItem.execute(diffX + _1770, diffY + _1771);
			}, false);
			li.addEventListener("mouseup", function(event) {
				event.cancelBubble = true;
				event.returnValue = false;
			}, false);
			li.addEventListener("mousedown", function(event) {
				event.cancelBubble = true;
				event.returnValue = false;
			}, false);
			li.addEventListener("mouseover", function(event) {
				this.style.backgroundColor = "silver";
			}, false);
			li.addEventListener("mouseout", function(event) {
				this.style.backgroundColor = "transparent";
			}, false);
		} else {
			if (li.attachEvent) {
				li.attachEvent("onclick", function(event) {
					var _1777 = arguments[0] || window.event;
					_1777.cancelBubble = true;
					_1777.returnValue = false;
					var diffX = _1777.clientX;
					var diffY = _1777.clientY;
					var _177a = document.body.parentNode.scrollLeft;
					var _177b = document.body.parentNode.scrollTop;
					event.srcElement.menuItem.execute(diffX + _177a, diffY
							+ _177b);
				});
				li.attachEvent("onmousedown", function(event) {
					event.cancelBubble = true;
					event.returnValue = false;
				});
				li.attachEvent("onmouseup", function(event) {
					event.cancelBubble = true;
					event.returnValue = false;
				});
				li.attachEvent("onmouseover", function(event) {
					event.srcElement.style.backgroundColor = "silver";
				});
				li.attachEvent("onmouseout", function(event) {
					event.srcElement.style.backgroundColor = "transparent";
				});
			}
		}
	}
};
draw2d.MenuItem = function(label, _287f, _2880) {
	this.label = label;
	this.iconUrl = _287f;
	this.parentMenu = null;
	this.action = _2880;
};
draw2d.MenuItem.prototype.type = "draw2d.MenuItem";
draw2d.MenuItem.prototype.isEnabled = function() {
	return true;
};
draw2d.MenuItem.prototype.getLabel = function() {
	return this.label;
};
draw2d.MenuItem.prototype.execute = function(x, y) {
	this.parentMenu.workflow.showMenu(null);
	this.action(x, y);
};
draw2d.Locator = function() {
};
draw2d.Locator.prototype.type = "draw2d.Locator";
draw2d.Locator.prototype.relocate = function(_1a89) {
};
draw2d.ConnectionLocator = function(_2b97) {
	draw2d.Locator.call(this);
	this.connection = _2b97;
};
draw2d.ConnectionLocator.prototype = new draw2d.Locator;
draw2d.ConnectionLocator.prototype.type = "draw2d.ConnectionLocator";
draw2d.ConnectionLocator.prototype.getConnection = function() {
	return this.connection;
};
draw2d.ManhattanMidpointLocator = function(_1fd8) {
	draw2d.ConnectionLocator.call(this, _1fd8);
};
draw2d.ManhattanMidpointLocator.prototype = new draw2d.ConnectionLocator;
draw2d.ManhattanMidpointLocator.prototype.type = "draw2d.ManhattanMidpointLocator";
draw2d.ManhattanMidpointLocator.prototype.relocate = function(_1fd9) {
	var conn = this.getConnection();
	var p = new draw2d.Point();
	var _1fdc = conn.getPoints();
	var index = Math.floor((_1fdc.getSize() - 2) / 2);
	if (_1fdc.getSize() <= index + 1) {
		return;
	}
	var p1 = _1fdc.get(index);
	var p2 = _1fdc.get(index + 1);
	p.x = (p2.x - p1.x) / 2 + p1.x + 5;
	p.y = (p2.y - p1.y) / 2 + p1.y + 5;
	_1fd9.setPosition(p.x, p.y);
};
draw2d.BezierMidpointLocator = function(_1600) {
	draw2d.ConnectionLocator.call(this, _1600);
};
draw2d.BezierMidpointLocator.prototype = new draw2d.ConnectionLocator;
draw2d.BezierMidpointLocator.prototype.type = "draw2d.BezierMidpointLocator";
draw2d.BezierMidpointLocator.prototype.relocate = function(_1601) {
	var conn = this.getConnection();
	var p = new draw2d.Point();
	var _1604 = conn.getPoints();
	var index = Math.floor((_1604.getSize() - 2) / 2);
	if (_1604.getSize() <= index + 1) {
		return;
	}
	var p1 = _1604.get(index);
	var p2 = _1604.get(index + 1);
	p.x = (p2.x - p1.x) / 2 + p1.x + 5;
	p.y = (p2.y - p1.y) / 2 + p1.y + 5;
	_1601.setPosition(p.x, p.y);
};
draw2d.EditPartFactory = function() {
};
draw2d.EditPartFactory.prototype.type = "draw2d.EditPartFactory";
draw2d.EditPartFactory.prototype.createEditPart = function(model) {
};
draw2d.AbstractObjectModel = function() {
	this.listeners = new draw2d.ArrayList();
	this.id = draw2d.UUID.create();
};
draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED = "element added";
draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED = "element removed";
draw2d.AbstractObjectModel.EVENT_CONNECTION_ADDED = "connection addedx";
draw2d.AbstractObjectModel.EVENT_CONNECTION_REMOVED = "connection removed";
draw2d.AbstractObjectModel.prototype.type = "draw2d.AbstractObjectModel";
draw2d.AbstractObjectModel.prototype.getModelChildren = function() {
	return new draw2d.ArrayList();
};
draw2d.AbstractObjectModel.prototype.getModelParent = function() {
	return this.modelParent;
};
draw2d.AbstractObjectModel.prototype.setModelParent = function(_20ab) {
	this.modelParent = _20ab;
};
draw2d.AbstractObjectModel.prototype.getId = function() {
	return this.id;
};
draw2d.AbstractObjectModel.prototype.firePropertyChange = function(_20ac,
		_20ad, _20ae) {
	var count = this.listeners.getSize();
	if (count === 0) {
		return;
	}
	var event = new draw2d.PropertyChangeEvent(this, _20ac, _20ad, _20ae);
	for ( var i = 0; i < count; i++) {
		try {
			this.listeners.get(i).propertyChange(event);
		} catch (e) {
			alert("Method: draw2d.AbstractObjectModel.prototype.firePropertyChange\n"
					+ e
					+ "\nProperty: "
					+ _20ac
					+ "\nListener Class:"
					+ this.listeners.get(i).type);
		}
	}
};
draw2d.AbstractObjectModel.prototype.addPropertyChangeListener = function(_20b2) {
	if (_20b2 !== null) {
		this.listeners.add(_20b2);
	}
};
draw2d.AbstractObjectModel.prototype.removePropertyChangeListener = function(
		_20b3) {
	if (_20b3 !== null) {
		this.listeners.remove(_20b3);
	}
};
draw2d.AbstractObjectModel.prototype.getPersistentAttributes = function() {
	return {
		id : this.id
	};
};
draw2d.AbstractConnectionModel = function() {
	draw2d.AbstractObjectModel.call(this);
};
draw2d.AbstractConnectionModel.prototype = new draw2d.AbstractObjectModel();
draw2d.AbstractConnectionModel.prototype.type = "draw2d.AbstractConnectionModel";
draw2d.AbstractConnectionModel.prototype.getSourceModel = function() {
	throw "you must override the method [AbstractConnectionModel.prototype.getSourceModel]";
};
draw2d.AbstractConnectionModel.prototype.getTargetModel = function() {
	throw "you must override the method [AbstractConnectionModel.prototype.getTargetModel]";
};
draw2d.AbstractConnectionModel.prototype.getSourcePortName = function() {
	throw "you must override the method [AbstractConnectionModel.prototype.getSourcePortName]";
};
draw2d.AbstractConnectionModel.prototype.getTargetPortName = function() {
	throw "you must override the method [AbstractConnectionModel.prototype.getTargetPortName]";
};
draw2d.AbstractConnectionModel.prototype.getSourcePortModel = function() {
	throw "you must override the method [AbstractConnectionModel.prototype.getSourcePortModel]";
};
draw2d.AbstractConnectionModel.prototype.getTargetPortModel = function() {
	throw "you must override the method [AbstractConnectionModel.prototype.getTargetPortModel]";
};
draw2d.PropertyChangeEvent = function(model, _2455, _2456, _2457) {
	this.model = model;
	this.property = _2455;
	this.oldValue = _2456;
	this.newValue = _2457;
};
draw2d.PropertyChangeEvent.prototype.type = "draw2d.PropertyChangeEvent";
draw2d.GraphicalViewer = function(id) {
	try {
		draw2d.Workflow.call(this, id);
		this.factory = null;
		this.model = null;
		this.initDone = false;
	} catch (e) {
		pushErrorStack(e, "draw2d.GraphicalViewer=function(/*:String*/ id)");
	}
};
draw2d.GraphicalViewer.prototype = new draw2d.Workflow();
draw2d.GraphicalViewer.prototype.type = "draw2d.GraphicalViewer";
draw2d.GraphicalViewer.prototype.setEditPartFactory = function(_1ec5) {
	this.factory = _1ec5;
	this.checkInit();
};
draw2d.GraphicalViewer.prototype.setModel = function(model) {
	try {
		if (model instanceof draw2d.AbstractObjectModel) {
			this.model = model;
			this.checkInit();
			this.model.addPropertyChangeListener(this);
		} else {
			alert("Invalid model class type:" + model.type);
		}
	} catch (e) {
		pushErrorStack(
				e,
				"draw2d.GraphicalViewer.prototype.setModel=function(/*:draw2d.AbstractObjectModel*/ model )");
	}
};
draw2d.GraphicalViewer.prototype.propertyChange = function(event) {
	switch (event.property) {
	case draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED:
		var _1ec8 = this.getFigure(event.oldValue.getId());
		this.removeFigure(_1ec8);
		break;
	case draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED:
		var _1ec8 = this.factory.createEditPart(event.newValue);
		_1ec8.setId(event.newValue.getId());
		this.addFigure(_1ec8);
		this.setCurrentSelection(_1ec8);
		break;
	}
};
draw2d.GraphicalViewer.prototype.checkInit = function() {
	if (this.factory !== null && this.model !== null && this.initDone == false) {
		try {
			var _1ec9 = this.model.getModelChildren();
			var count = _1ec9.getSize();
			for ( var i = 0; i < count; i++) {
				var child = _1ec9.get(i);
				var _1ecd = this.factory.createEditPart(child);
				_1ecd.setId(child.getId());
				this.addFigure(_1ecd);
			}
		} catch (e) {
			pushErrorStack(e,
					"draw2d.GraphicalViewer.prototype.checkInit=function()[addFigures]");
		}
		try {
			var _1ece = this.getDocument().getFigures();
			var count = _1ece.getSize();
			for ( var i = 0; i < count; i++) {
				var _1ecd = _1ece.get(i);
				if (_1ecd instanceof draw2d.Node) {
					this.refreshConnections(_1ecd);
				}
			}
		} catch (e) {
			pushErrorStack(e,
					"draw2d.GraphicalViewer.prototype.checkInit=function()[refreshConnections]");
		}
	}
};
draw2d.GraphicalViewer.prototype.refreshConnections = function(node) {
	try {
		var _1ed0 = new draw2d.ArrayList();
		var _1ed1 = node.getModelSourceConnections();
		var count = _1ed1.getSize();
		for ( var i = 0; i < count; i++) {
			var _1ed4 = _1ed1.get(i);
			_1ed0.add(_1ed4.getId());
			var _1ed5 = this.getLine(_1ed4.getId());
			if (_1ed5 === null) {
				_1ed5 = this.factory.createEditPart(_1ed4);
				var _1ed6 = _1ed4.getSourceModel();
				var _1ed7 = _1ed4.getTargetModel();
				var _1ed8 = this.getFigure(_1ed6.getId());
				var _1ed9 = this.getFigure(_1ed7.getId());
				var _1eda = _1ed8.getOutputPort(_1ed4.getSourcePortName());
				var _1edb = _1ed9.getInputPort(_1ed4.getTargetPortName());
				_1ed5.setTarget(_1edb);
				_1ed5.setSource(_1eda);
				_1ed5.setId(_1ed4.getId());
				this.addFigure(_1ed5);
				this.setCurrentSelection(_1ed5);
			}
		}
		var ports = node.getOutputPorts();
		count = ports.getSize();
		for ( var i = 0; i < count; i++) {
			var _1edd = ports.get(i).getConnections();
			var _1ede = _1edd.getSize();
			for ( var ii = 0; ii < _1ede; ii++) {
				var _1ee0 = _1edd.get(ii);
				if (!_1ed0.contains(_1ee0.getId())) {
					this.removeFigure(_1ee0);
					_1ed0.add(_1ee0.getId());
				}
			}
		}
	} catch (e) {
		pushErrorStack(
				e,
				"draw2d.GraphicalViewer.prototype.refreshConnections=function(/*:draw2d.Node*/ node )");
	}
};
draw2d.GraphicalEditor = function(id) {
	try {
		this.view = new draw2d.GraphicalViewer(id);
		this.initializeGraphicalViewer();
	} catch (e) {
		pushErrorStack(e, "draw2d.GraphicalEditor=function(/*:String*/ id)");
	}
};
draw2d.GraphicalEditor.prototype.type = "draw2d.GraphicalEditor";
draw2d.GraphicalEditor.prototype.initializeGraphicalViewer = function() {
};
draw2d.GraphicalEditor.prototype.getGraphicalViewer = function() {
	return this.view;
};
draw2d.GraphicalEditor.prototype.executeCommand = function(_295e) {
	this.view.getCommandStack().execute(_295e);
};
var whitespace = "\n\r\t ";
XMLP = function(_28b8) {
	_28b8 = SAXStrings.replace(_28b8, null, null, "\r\n", "\n");
	_28b8 = SAXStrings.replace(_28b8, null, null, "\r", "\n");
	this.m_xml = _28b8;
	this.m_iP = 0;
	this.m_iState = XMLP._STATE_PROLOG;
	this.m_stack = new Stack();
	this._clearAttributes();
};
XMLP._NONE = 0;
XMLP._ELM_B = 1;
XMLP._ELM_E = 2;
XMLP._ELM_EMP = 3;
XMLP._ATT = 4;
XMLP._TEXT = 5;
XMLP._ENTITY = 6;
XMLP._PI = 7;
XMLP._CDATA = 8;
XMLP._COMMENT = 9;
XMLP._DTD = 10;
XMLP._ERROR = 11;
XMLP._CONT_XML = 0;
XMLP._CONT_ALT = 1;
XMLP._ATT_NAME = 0;
XMLP._ATT_VAL = 1;
XMLP._STATE_PROLOG = 1;
XMLP._STATE_DOCUMENT = 2;
XMLP._STATE_MISC = 3;
XMLP._errs = [];
XMLP._errs[XMLP.ERR_CLOSE_PI = 0] = "PI: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_DTD = 1] = "DTD: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_COMMENT = 2] = "Comment: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_CDATA = 3] = "CDATA: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ELM = 4] = "Element: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ENTITY = 5] = "Entity: missing closing sequence";
XMLP._errs[XMLP.ERR_PI_TARGET = 6] = "PI: target is required";
XMLP._errs[XMLP.ERR_ELM_EMPTY = 7] = "Element: cannot be both empty and closing";
XMLP._errs[XMLP.ERR_ELM_NAME = 8] = "Element: name must immediatly follow \"<\"";
XMLP._errs[XMLP.ERR_ELM_LT_NAME = 9] = "Element: \"<\" not allowed in element names";
XMLP._errs[XMLP.ERR_ATT_VALUES = 10] = "Attribute: values are required and must be in quotes";
XMLP._errs[XMLP.ERR_ATT_LT_NAME = 11] = "Element: \"<\" not allowed in attribute names";
XMLP._errs[XMLP.ERR_ATT_LT_VALUE = 12] = "Attribute: \"<\" not allowed in attribute values";
XMLP._errs[XMLP.ERR_ATT_DUP = 13] = "Attribute: duplicate attributes not allowed";
XMLP._errs[XMLP.ERR_ENTITY_UNKNOWN = 14] = "Entity: unknown entity";
XMLP._errs[XMLP.ERR_INFINITELOOP = 15] = "Infininte loop";
XMLP._errs[XMLP.ERR_DOC_STRUCTURE = 16] = "Document: only comments, processing instructions, or whitespace allowed outside of document element";
XMLP._errs[XMLP.ERR_ELM_NESTING = 17] = "Element: must be nested correctly";
XMLP.prototype._addAttribute = function(name, value) {
	this.m_atts[this.m_atts.length] = new Array(name, value);
};
XMLP.prototype._checkStructure = function(_28bb) {
	if (XMLP._STATE_PROLOG == this.m_iState) {
		if ((XMLP._TEXT == _28bb) || (XMLP._ENTITY == _28bb)) {
			if (SAXStrings.indexOfNonWhitespace(this.getContent(), this
					.getContentBegin(), this.getContentEnd()) != -1) {
				return this._setErr(XMLP.ERR_DOC_STRUCTURE);
			}
		}
		if ((XMLP._ELM_B == _28bb) || (XMLP._ELM_EMP == _28bb)) {
			this.m_iState = XMLP._STATE_DOCUMENT;
		}
	}
	if (XMLP._STATE_DOCUMENT == this.m_iState) {
		if ((XMLP._ELM_B == _28bb) || (XMLP._ELM_EMP == _28bb)) {
			this.m_stack.push(this.getName());
		}
		if ((XMLP._ELM_E == _28bb) || (XMLP._ELM_EMP == _28bb)) {
			var _28bc = this.m_stack.pop();
			if ((_28bc === null) || (_28bc != this.getName())) {
				return this._setErr(XMLP.ERR_ELM_NESTING);
			}
		}
		if (this.m_stack.count() === 0) {
			this.m_iState = XMLP._STATE_MISC;
			return _28bb;
		}
	}
	if (XMLP._STATE_MISC == this.m_iState) {
		if ((XMLP._ELM_B == _28bb) || (XMLP._ELM_E == _28bb)
				|| (XMLP._ELM_EMP == _28bb) || (XMLP.EVT_DTD == _28bb)) {
			return this._setErr(XMLP.ERR_DOC_STRUCTURE);
		}
		if ((XMLP._TEXT == _28bb) || (XMLP._ENTITY == _28bb)) {
			if (SAXStrings.indexOfNonWhitespace(this.getContent(), this
					.getContentBegin(), this.getContentEnd()) != -1) {
				return this._setErr(XMLP.ERR_DOC_STRUCTURE);
			}
		}
	}
	return _28bb;
};
XMLP.prototype._clearAttributes = function() {
	this.m_atts = [];
};
XMLP.prototype._findAttributeIndex = function(name) {
	for ( var i = 0; i < this.m_atts.length; i++) {
		if (this.m_atts[i][XMLP._ATT_NAME] == name) {
			return i;
		}
	}
	return -1;
};
XMLP.prototype.getAttributeCount = function() {
	return this.m_atts ? this.m_atts.length : 0;
};
XMLP.prototype.getAttributeName = function(index) {
	return ((index < 0) || (index >= this.m_atts.length)) ? null
			: this.m_atts[index][XMLP._ATT_NAME];
};
XMLP.prototype.getAttributeValue = function(index) {
	return ((index < 0) || (index >= this.m_atts.length)) ? null
			: __unescapeString(this.m_atts[index][XMLP._ATT_VAL]);
};
XMLP.prototype.getAttributeValueByName = function(name) {
	return this.getAttributeValue(this._findAttributeIndex(name));
};
XMLP.prototype.getColumnNumber = function() {
	return SAXStrings.getColumnNumber(this.m_xml, this.m_iP);
};
XMLP.prototype.getContent = function() {
	return (this.m_cSrc == XMLP._CONT_XML) ? this.m_xml : this.m_cAlt;
};
XMLP.prototype.getContentBegin = function() {
	return this.m_cB;
};
XMLP.prototype.getContentEnd = function() {
	return this.m_cE;
};
XMLP.prototype.getLineNumber = function() {
	return SAXStrings.getLineNumber(this.m_xml, this.m_iP);
};
XMLP.prototype.getName = function() {
	return this.m_name;
};
XMLP.prototype.next = function() {
	return this._checkStructure(this._parse());
};
XMLP.prototype._parse = function() {
	if (this.m_iP == this.m_xml.length) {
		return XMLP._NONE;
	}
	if (this.m_iP == this.m_xml.indexOf("<?", this.m_iP)) {
		return this._parsePI(this.m_iP + 2);
	} else {
		if (this.m_iP == this.m_xml.indexOf("<!DOCTYPE", this.m_iP)) {
			return this._parseDTD(this.m_iP + 9);
		} else {
			if (this.m_iP == this.m_xml.indexOf("<!--", this.m_iP)) {
				return this._parseComment(this.m_iP + 4);
			} else {
				if (this.m_iP == this.m_xml.indexOf("<![CDATA[", this.m_iP)) {
					return this._parseCDATA(this.m_iP + 9);
				} else {
					if (this.m_iP == this.m_xml.indexOf("<", this.m_iP)) {
						return this._parseElement(this.m_iP + 1);
					} else {
						if (this.m_iP == this.m_xml.indexOf("&", this.m_iP)) {
							return this._parseEntity(this.m_iP + 1);
						} else {
							return this._parseText(this.m_iP);
						}
					}
				}
			}
		}
	}
};
XMLP.prototype._parseAttribute = function(iB, iE) {
	var iNB, iNE, iEq, iVB, iVE;
	var _28c5, strN, strV;
	this.m_cAlt = "";
	iNB = SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iE);
	if ((iNB == -1) || (iNB >= iE)) {
		return iNB;
	}
	iEq = this.m_xml.indexOf("=", iNB);
	if ((iEq == -1) || (iEq > iE)) {
		return this._setErr(XMLP.ERR_ATT_VALUES);
	}
	iNE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iNB, iEq);
	iVB = SAXStrings.indexOfNonWhitespace(this.m_xml, iEq + 1, iE);
	if ((iVB == -1) || (iVB > iE)) {
		return this._setErr(XMLP.ERR_ATT_VALUES);
	}
	_28c5 = this.m_xml.charAt(iVB);
	if (SAXStrings.QUOTES.indexOf(_28c5) == -1) {
		return this._setErr(XMLP.ERR_ATT_VALUES);
	}
	iVE = this.m_xml.indexOf(_28c5, iVB + 1);
	if ((iVE == -1) || (iVE > iE)) {
		return this._setErr(XMLP.ERR_ATT_VALUES);
	}
	strN = this.m_xml.substring(iNB, iNE + 1);
	strV = this.m_xml.substring(iVB + 1, iVE);
	if (strN.indexOf("<") != -1) {
		return this._setErr(XMLP.ERR_ATT_LT_NAME);
	}
	if (strV.indexOf("<") != -1) {
		return this._setErr(XMLP.ERR_ATT_LT_VALUE);
	}
	strV = SAXStrings.replace(strV, null, null, "\n", " ");
	strV = SAXStrings.replace(strV, null, null, "\t", " ");
	iRet = this._replaceEntities(strV);
	if (iRet == XMLP._ERROR) {
		return iRet;
	}
	strV = this.m_cAlt;
	if (this._findAttributeIndex(strN) == -1) {
		this._addAttribute(strN, strV);
	} else {
		return this._setErr(XMLP.ERR_ATT_DUP);
	}
	this.m_iP = iVE + 2;
	return XMLP._ATT;
};
XMLP.prototype._parseCDATA = function(iB) {
	var iE = this.m_xml.indexOf("]]>", iB);
	if (iE == -1) {
		return this._setErr(XMLP.ERR_CLOSE_CDATA);
	}
	this._setContent(XMLP._CONT_XML, iB, iE);
	this.m_iP = iE + 3;
	return XMLP._CDATA;
};
XMLP.prototype._parseComment = function(iB) {
	var iE = this.m_xml.indexOf("-" + "->", iB);
	if (iE == -1) {
		return this._setErr(XMLP.ERR_CLOSE_COMMENT);
	}
	this._setContent(XMLP._CONT_XML, iB, iE);
	this.m_iP = iE + 3;
	return XMLP._COMMENT;
};
XMLP.prototype._parseDTD = function(iB) {
	var iE, strClose, iInt, iLast;
	iE = this.m_xml.indexOf(">", iB);
	if (iE == -1) {
		return this._setErr(XMLP.ERR_CLOSE_DTD);
	}
	iInt = this.m_xml.indexOf("[", iB);
	strClose = ((iInt != -1) && (iInt < iE)) ? "]>" : ">";
	while (true) {
		if (iE == iLast) {
			return this._setErr(XMLP.ERR_INFINITELOOP);
		}
		iLast = iE;
		iE = this.m_xml.indexOf(strClose, iB);
		if (iE == -1) {
			return this._setErr(XMLP.ERR_CLOSE_DTD);
		}
		if (this.m_xml.substring(iE - 1, iE + 2) != "]]>") {
			break;
		}
	}
	this.m_iP = iE + strClose.length;
	return XMLP._DTD;
};
XMLP.prototype._parseElement = function(iB) {
	var iE, iDE, iNE, iRet;
	var iType, strN, iLast;
	iDE = iE = this.m_xml.indexOf(">", iB);
	if (iE == -1) {
		return this._setErr(XMLP.ERR_CLOSE_ELM);
	}
	if (this.m_xml.charAt(iB) == "/") {
		iType = XMLP._ELM_E;
		iB++;
	} else {
		iType = XMLP._ELM_B;
	}
	if (this.m_xml.charAt(iE - 1) == "/") {
		if (iType == XMLP._ELM_E) {
			return this._setErr(XMLP.ERR_ELM_EMPTY);
		}
		iType = XMLP._ELM_EMP;
		iDE--;
	}
	iDE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iB, iDE);
	if (iE - iB != 1) {
		if (SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iDE) != iB) {
			return this._setErr(XMLP.ERR_ELM_NAME);
		}
	}
	this._clearAttributes();
	iNE = SAXStrings.indexOfWhitespace(this.m_xml, iB, iDE);
	if (iNE == -1) {
		iNE = iDE + 1;
	} else {
		this.m_iP = iNE;
		while (this.m_iP < iDE) {
			if (this.m_iP == iLast) {
				return this._setErr(XMLP.ERR_INFINITELOOP);
			}
			iLast = this.m_iP;
			iRet = this._parseAttribute(this.m_iP, iDE);
			if (iRet == XMLP._ERROR) {
				return iRet;
			}
		}
	}
	strN = this.m_xml.substring(iB, iNE);
	if (strN.indexOf("<") != -1) {
		return this._setErr(XMLP.ERR_ELM_LT_NAME);
	}
	this.m_name = strN;
	this.m_iP = iE + 1;
	return iType;
};
XMLP.prototype._parseEntity = function(iB) {
	var iE = this.m_xml.indexOf(";", iB);
	if (iE == -1) {
		return this._setErr(XMLP.ERR_CLOSE_ENTITY);
	}
	this.m_iP = iE + 1;
	return this._replaceEntity(this.m_xml, iB, iE);
};
XMLP.prototype._parsePI = function(iB) {
	var iE, iTB, iTE, iCB, iCE;
	iE = this.m_xml.indexOf("?>", iB);
	if (iE == -1) {
		return this._setErr(XMLP.ERR_CLOSE_PI);
	}
	iTB = SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iE);
	if (iTB == -1) {
		return this._setErr(XMLP.ERR_PI_TARGET);
	}
	iTE = SAXStrings.indexOfWhitespace(this.m_xml, iTB, iE);
	if (iTE == -1) {
		iTE = iE;
	}
	iCB = SAXStrings.indexOfNonWhitespace(this.m_xml, iTE, iE);
	if (iCB == -1) {
		iCB = iE;
	}
	iCE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iCB, iE);
	if (iCE == -1) {
		iCE = iE - 1;
	}
	this.m_name = this.m_xml.substring(iTB, iTE);
	this._setContent(XMLP._CONT_XML, iCB, iCE + 1);
	this.m_iP = iE + 2;
	return XMLP._PI;
};
XMLP.prototype._parseText = function(iB) {
	var iE, iEE;
	iE = this.m_xml.indexOf("<", iB);
	if (iE == -1) {
		iE = this.m_xml.length;
	}
	iEE = this.m_xml.indexOf("&", iB);
	if ((iEE != -1) && (iEE <= iE)) {
		iE = iEE;
	}
	this._setContent(XMLP._CONT_XML, iB, iE);
	this.m_iP = iE;
	return XMLP._TEXT;
};
XMLP.prototype._replaceEntities = function(strD, iB, iE) {
	if (SAXStrings.isEmpty(strD)) {
		return "";
	}
	iB = iB || 0;
	iE = iE || strD.length;
	var iEB, iEE, strRet = "";
	iEB = strD.indexOf("&", iB);
	iEE = iB;
	while ((iEB > 0) && (iEB < iE)) {
		strRet += strD.substring(iEE, iEB);
		iEE = strD.indexOf(";", iEB) + 1;
		if ((iEE === 0) || (iEE > iE)) {
			return this._setErr(XMLP.ERR_CLOSE_ENTITY);
		}
		iRet = this._replaceEntity(strD, iEB + 1, iEE - 1);
		if (iRet == XMLP._ERROR) {
			return iRet;
		}
		strRet += this.m_cAlt;
		iEB = strD.indexOf("&", iEE);
	}
	if (iEE != iE) {
		strRet += strD.substring(iEE, iE);
	}
	this._setContent(XMLP._CONT_ALT, strRet);
	return XMLP._ENTITY;
};
XMLP.prototype._replaceEntity = function(strD, iB, iE) {
	if (SAXStrings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	switch (strD.substring(iB, iE)) {
	case "amp":
		strEnt = "&";
		break;
	case "lt":
		strEnt = "<";
		break;
	case "gt":
		strEnt = ">";
		break;
	case "apos":
		strEnt = "'";
		break;
	case "quot":
		strEnt = "\"";
		break;
	default:
		if (strD.charAt(iB) == "#") {
			strEnt = String.fromCharCode(parseInt(strD.substring(iB + 1, iE)));
		} else {
			return this._setErr(XMLP.ERR_ENTITY_UNKNOWN);
		}
		break;
	}
	this._setContent(XMLP._CONT_ALT, strEnt);
	return XMLP._ENTITY;
};
XMLP.prototype._setContent = function(iSrc) {
	var args = arguments;
	if (XMLP._CONT_XML == iSrc) {
		this.m_cAlt = null;
		this.m_cB = args[1];
		this.m_cE = args[2];
	} else {
		this.m_cAlt = args[1];
		this.m_cB = 0;
		this.m_cE = args[1].length;
	}
	this.m_cSrc = iSrc;
};
XMLP.prototype._setErr = function(iErr) {
	var _28df = XMLP._errs[iErr];
	this.m_cAlt = _28df;
	this.m_cB = 0;
	this.m_cE = _28df.length;
	this.m_cSrc = XMLP._CONT_ALT;
	return XMLP._ERROR;
};
SAXDriver = function() {
	this.m_hndDoc = null;
	this.m_hndErr = null;
	this.m_hndLex = null;
};
SAXDriver.DOC_B = 1;
SAXDriver.DOC_E = 2;
SAXDriver.ELM_B = 3;
SAXDriver.ELM_E = 4;
SAXDriver.CHARS = 5;
SAXDriver.PI = 6;
SAXDriver.CD_B = 7;
SAXDriver.CD_E = 8;
SAXDriver.CMNT = 9;
SAXDriver.DTD_B = 10;
SAXDriver.DTD_E = 11;
SAXDriver.prototype.parse = function(strD) {
	var _28e1 = new XMLP(strD);
	if (this.m_hndDoc && this.m_hndDoc.setDocumentLocator) {
		this.m_hndDoc.setDocumentLocator(this);
	}
	this.m_parser = _28e1;
	this.m_bErr = false;
	if (!this.m_bErr) {
		this._fireEvent(SAXDriver.DOC_B);
	}
	this._parseLoop();
	if (!this.m_bErr) {
		this._fireEvent(SAXDriver.DOC_E);
	}
	this.m_xml = null;
	this.m_iP = 0;
};
SAXDriver.prototype.setDocumentHandler = function(hnd) {
	this.m_hndDoc = hnd;
};
SAXDriver.prototype.setErrorHandler = function(hnd) {
	this.m_hndErr = hnd;
};
SAXDriver.prototype.setLexicalHandler = function(hnd) {
	this.m_hndLex = hnd;
};
SAXDriver.prototype.getColumnNumber = function() {
	return this.m_parser.getColumnNumber();
};
SAXDriver.prototype.getLineNumber = function() {
	return this.m_parser.getLineNumber();
};
SAXDriver.prototype.getMessage = function() {
	return this.m_strErrMsg;
};
SAXDriver.prototype.getPublicId = function() {
	return null;
};
SAXDriver.prototype.getSystemId = function() {
	return null;
};
SAXDriver.prototype.getLength = function() {
	return this.m_parser.getAttributeCount();
};
SAXDriver.prototype.getName = function(index) {
	return this.m_parser.getAttributeName(index);
};
SAXDriver.prototype.getValue = function(index) {
	return this.m_parser.getAttributeValue(index);
};
SAXDriver.prototype.getValueByName = function(name) {
	return this.m_parser.getAttributeValueByName(name);
};
SAXDriver.prototype._fireError = function(_28e8) {
	this.m_strErrMsg = _28e8;
	this.m_bErr = true;
	if (this.m_hndErr && this.m_hndErr.fatalError) {
		this.m_hndErr.fatalError(this);
	}
};
SAXDriver.prototype._fireEvent = function(iEvt) {
	var hnd, func, args = arguments, iLen = args.length - 1;
	if (this.m_bErr) {
		return;
	}
	if (SAXDriver.DOC_B == iEvt) {
		func = "startDocument";
		hnd = this.m_hndDoc;
	} else {
		if (SAXDriver.DOC_E == iEvt) {
			func = "endDocument";
			hnd = this.m_hndDoc;
		} else {
			if (SAXDriver.ELM_B == iEvt) {
				func = "startElement";
				hnd = this.m_hndDoc;
			} else {
				if (SAXDriver.ELM_E == iEvt) {
					func = "endElement";
					hnd = this.m_hndDoc;
				} else {
					if (SAXDriver.CHARS == iEvt) {
						func = "characters";
						hnd = this.m_hndDoc;
					} else {
						if (SAXDriver.PI == iEvt) {
							func = "processingInstruction";
							hnd = this.m_hndDoc;
						} else {
							if (SAXDriver.CD_B == iEvt) {
								func = "startCDATA";
								hnd = this.m_hndLex;
							} else {
								if (SAXDriver.CD_E == iEvt) {
									func = "endCDATA";
									hnd = this.m_hndLex;
								} else {
									if (SAXDriver.CMNT == iEvt) {
										func = "comment";
										hnd = this.m_hndLex;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	if (hnd && hnd[func]) {
		if (0 == iLen) {
			hnd[func]();
		} else {
			if (1 == iLen) {
				hnd[func](args[1]);
			} else {
				if (2 == iLen) {
					hnd[func](args[1], args[2]);
				} else {
					if (3 == iLen) {
						hnd[func](args[1], args[2], args[3]);
					}
				}
			}
		}
	}
};
SAXDriver.prototype._parseLoop = function(_28eb) {
	var _28ec, _28eb;
	_28eb = this.m_parser;
	while (!this.m_bErr) {
		_28ec = _28eb.next();
		if (_28ec == XMLP._ELM_B) {
			this._fireEvent(SAXDriver.ELM_B, _28eb.getName(), this);
		} else {
			if (_28ec == XMLP._ELM_E) {
				this._fireEvent(SAXDriver.ELM_E, _28eb.getName());
			} else {
				if (_28ec == XMLP._ELM_EMP) {
					this._fireEvent(SAXDriver.ELM_B, _28eb.getName(), this);
					this._fireEvent(SAXDriver.ELM_E, _28eb.getName());
				} else {
					if (_28ec == XMLP._TEXT) {
						this._fireEvent(SAXDriver.CHARS, _28eb.getContent(),
								_28eb.getContentBegin(), _28eb.getContentEnd()
										- _28eb.getContentBegin());
					} else {
						if (_28ec == XMLP._ENTITY) {
							this._fireEvent(SAXDriver.CHARS,
									_28eb.getContent(),
									_28eb.getContentBegin(), _28eb
											.getContentEnd()
											- _28eb.getContentBegin());
						} else {
							if (_28ec == XMLP._PI) {
								this._fireEvent(SAXDriver.PI, _28eb.getName(),
										_28eb.getContent().substring(
												_28eb.getContentBegin(),
												_28eb.getContentEnd()));
							} else {
								if (_28ec == XMLP._CDATA) {
									this._fireEvent(SAXDriver.CD_B);
									this._fireEvent(SAXDriver.CHARS, _28eb
											.getContent(), _28eb
											.getContentBegin(), _28eb
											.getContentEnd()
											- _28eb.getContentBegin());
									this._fireEvent(SAXDriver.CD_E);
								} else {
									if (_28ec == XMLP._COMMENT) {
										this._fireEvent(SAXDriver.CMNT, _28eb
												.getContent(), _28eb
												.getContentBegin(), _28eb
												.getContentEnd()
												- _28eb.getContentBegin());
									} else {
										if (_28ec == XMLP._DTD) {
										} else {
											if (_28ec == XMLP._ERROR) {
												this._fireError(_28eb
														.getContent());
											} else {
												if (_28ec == XMLP._NONE) {
													return;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
SAXStrings = function() {
};
SAXStrings.WHITESPACE = " \t\n\r";
SAXStrings.QUOTES = "\"'";
SAXStrings.getColumnNumber = function(strD, iP) {
	if (SAXStrings.isEmpty(strD)) {
		return -1;
	}
	iP = iP || strD.length;
	var arrD = strD.substring(0, iP).split("\n");
	var _28f0 = arrD[arrD.length - 1];
	arrD.length--;
	var _28f1 = arrD.join("\n").length;
	return iP - _28f1;
};
SAXStrings.getLineNumber = function(strD, iP) {
	if (SAXStrings.isEmpty(strD)) {
		return -1;
	}
	iP = iP || strD.length;
	return strD.substring(0, iP).split("\n").length;
};
SAXStrings.indexOfNonWhitespace = function(strD, iB, iE) {
	if (SAXStrings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	for ( var i = iB; i < iE; i++) {
		if (SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
			return i;
		}
	}
	return -1;
};
SAXStrings.indexOfWhitespace = function(strD, iB, iE) {
	if (SAXStrings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	for ( var i = iB; i < iE; i++) {
		if (SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) != -1) {
			return i;
		}
	}
	return -1;
};
SAXStrings.isEmpty = function(strD) {
	return (strD === null) || (strD.length === 0);
};
SAXStrings.lastIndexOfNonWhitespace = function(strD, iB, iE) {
	if (SAXStrings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	for ( var i = iE - 1; i >= iB; i--) {
		if (SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
			return i;
		}
	}
	return -1;
};
SAXStrings.replace = function(strD, iB, iE, strF, strR) {
	if (SAXStrings.isEmpty(strD)) {
		return "";
	}
	iB = iB || 0;
	iE = iE || strD.length;
	return strD.substring(iB, iE).split(strF).join(strR);
};
Stack = function() {
	this.m_arr = [];
};
Stack.prototype.clear = function() {
	this.m_arr = [];
};
Stack.prototype.count = function() {
	return this.m_arr.length;
};
Stack.prototype.destroy = function() {
	this.m_arr = null;
};
Stack.prototype.peek = function() {
	if (this.m_arr.length === 0) {
		return null;
	}
	return this.m_arr[this.m_arr.length - 1];
};
Stack.prototype.pop = function() {
	if (this.m_arr.length === 0) {
		return null;
	}
	var o = this.m_arr[this.m_arr.length - 1];
	this.m_arr.length--;
	return o;
};
Stack.prototype.push = function(o) {
	this.m_arr[this.m_arr.length] = o;
};
function isEmpty(str) {
	return (str === null) || (str.length == 0);
}
function trim(_2909, _290a, _290b) {
	if (isEmpty(_2909)) {
		return "";
	}
	if (_290a === null) {
		_290a = true;
	}
	if (_290b === null) {
		_290b = true;
	}
	var left = 0;
	var right = 0;
	var i = 0;
	var k = 0;
	if (_290a == true) {
		while ((i < _2909.length)
				&& (whitespace.indexOf(_2909.charAt(i++)) != -1)) {
			left++;
		}
	}
	if (_290b == true) {
		k = _2909.length - 1;
		while ((k >= left) && (whitespace.indexOf(_2909.charAt(k--)) != -1)) {
			right++;
		}
	}
	return _2909.substring(left, _2909.length - right);
}
function __escapeString(str) {
	var _2911 = /&/g;
	var _2912 = /</g;
	var _2913 = />/g;
	var _2914 = /"/g;
	var _2915 = /'/g;
	str = str.replace(_2911, "&amp;");
	str = str.replace(_2912, "&lt;");
	str = str.replace(_2913, "&gt;");
	str = str.replace(_2914, "&quot;");
	str = str.replace(_2915, "&apos;");
	return str;
}
function __unescapeString(str) {
	var _2917 = /&amp;/g;
	var _2918 = /&lt;/g;
	var _2919 = /&gt;/g;
	var _291a = /&quot;/g;
	var _291b = /&apos;/g;
	str = str.replace(_2917, "&");
	str = str.replace(_2918, "<");
	str = str.replace(_2919, ">");
	str = str.replace(_291a, "\"");
	str = str.replace(_291b, "'");
	return str;
}
function addClass(_1da0, _1da1) {
	if (_1da0) {
		if (_1da0.indexOf("|" + _1da1 + "|") < 0) {
			_1da0 += _1da1 + "|";
		}
	} else {
		_1da0 = "|" + _1da1 + "|";
	}
	return _1da0;
}
DOMException = function(code) {
	this._class = addClass(this._class, "DOMException");
	this.code = code;
};
DOMException.INDEX_SIZE_ERR = 1;
DOMException.DOMSTRING_SIZE_ERR = 2;
DOMException.HIERARCHY_REQUEST_ERR = 3;
DOMException.WRONG_DOCUMENT_ERR = 4;
DOMException.INVALID_CHARACTER_ERR = 5;
DOMException.NO_DATA_ALLOWED_ERR = 6;
DOMException.NO_MODIFICATION_ALLOWED_ERR = 7;
DOMException.NOT_FOUND_ERR = 8;
DOMException.NOT_SUPPORTED_ERR = 9;
DOMException.INUSE_ATTRIBUTE_ERR = 10;
DOMException.INVALID_STATE_ERR = 11;
DOMException.SYNTAX_ERR = 12;
DOMException.INVALID_MODIFICATION_ERR = 13;
DOMException.NAMESPACE_ERR = 14;
DOMException.INVALID_ACCESS_ERR = 15;
DOMImplementation = function() {
	this._class = addClass(this._class, "DOMImplementation");
	this._p = null;
	this.preserveWhiteSpace = false;
	this.namespaceAware = true;
	this.errorChecking = true;
};
DOMImplementation.prototype.escapeString = function DOMNode__escapeString(str) {
	return __escapeString(str);
};
DOMImplementation.prototype.unescapeString = function DOMNode__unescapeString(
		str) {
	return __unescapeString(str);
};
DOMImplementation.prototype.hasFeature = function DOMImplementation_hasFeature(
		_1da5, _1da6) {
	var ret = false;
	if (_1da5.toLowerCase() == "xml") {
		ret = (!_1da6 || (_1da6 == "1.0") || (_1da6 == "2.0"));
	} else {
		if (_1da5.toLowerCase() == "core") {
			ret = (!_1da6 || (_1da6 == "2.0"));
		}
	}
	return ret;
};
DOMImplementation.prototype.loadXML = function DOMImplementation_loadXML(_1da8) {
	var _1da9;
	try {
		_1da9 = new XMLP(_1da8);
	} catch (e) {
		alert("Error Creating the SAX Parser. Did you include xmlsax.js or tinyxmlsax.js in your web page?\nThe SAX parser is needed to populate XML for <SCRIPT>'s W3C DOM Parser with data.");
	}
	var doc = new DOMDocument(this);
	this._parseLoop(doc, _1da9);
	doc._parseComplete = true;
	return doc;
};
DOMImplementation.prototype.translateErrCode = function DOMImplementation_translateErrCode(
		code) {
	var msg = "";
	switch (code) {
	case DOMException.INDEX_SIZE_ERR:
		msg = "INDEX_SIZE_ERR: Index out of bounds";
		break;
	case DOMException.DOMSTRING_SIZE_ERR:
		msg = "DOMSTRING_SIZE_ERR: The resulting string is too long to fit in a DOMString";
		break;
	case DOMException.HIERARCHY_REQUEST_ERR:
		msg = "HIERARCHY_REQUEST_ERR: The Node can not be inserted at this location";
		break;
	case DOMException.WRONG_DOCUMENT_ERR:
		msg = "WRONG_DOCUMENT_ERR: The source and the destination Documents are not the same";
		break;
	case DOMException.INVALID_CHARACTER_ERR:
		msg = "INVALID_CHARACTER_ERR: The string contains an invalid character";
		break;
	case DOMException.NO_DATA_ALLOWED_ERR:
		msg = "NO_DATA_ALLOWED_ERR: This Node / NodeList does not support data";
		break;
	case DOMException.NO_MODIFICATION_ALLOWED_ERR:
		msg = "NO_MODIFICATION_ALLOWED_ERR: This object cannot be modified";
		break;
	case DOMException.NOT_FOUND_ERR:
		msg = "NOT_FOUND_ERR: The item cannot be found";
		break;
	case DOMException.NOT_SUPPORTED_ERR:
		msg = "NOT_SUPPORTED_ERR: This implementation does not support function";
		break;
	case DOMException.INUSE_ATTRIBUTE_ERR:
		msg = "INUSE_ATTRIBUTE_ERR: The Attribute has already been assigned to another Element";
		break;
	case DOMException.INVALID_STATE_ERR:
		msg = "INVALID_STATE_ERR: The object is no longer usable";
		break;
	case DOMException.SYNTAX_ERR:
		msg = "SYNTAX_ERR: Syntax error";
		break;
	case DOMException.INVALID_MODIFICATION_ERR:
		msg = "INVALID_MODIFICATION_ERR: Cannot change the type of the object";
		break;
	case DOMException.NAMESPACE_ERR:
		msg = "NAMESPACE_ERR: The namespace declaration is incorrect";
		break;
	case DOMException.INVALID_ACCESS_ERR:
		msg = "INVALID_ACCESS_ERR: The object does not support this function";
		break;
	default:
		msg = "UNKNOWN: Unknown Exception Code (" + code + ")";
	}
	return msg;
};
DOMImplementation.prototype._parseLoop = function DOMImplementation__parseLoop(
		doc, p) {
	var iEvt, iNode, iAttr, strName;
	iNodeParent = doc;
	var _1db0 = 0;
	var _1db1 = [];
	var _1db2 = [];
	if (this.namespaceAware) {
		var iNS = doc.createNamespace("");
		iNS.setValue("http://www.w3.org/2000/xmlns/");
		doc._namespaces.setNamedItem(iNS);
	}
	while (true) {
		iEvt = p.next();
		if (iEvt == XMLP._ELM_B) {
			var pName = p.getName();
			pName = trim(pName, true, true);
			if (!this.namespaceAware) {
				iNode = doc.createElement(p.getName());
				for ( var i = 0; i < p.getAttributeCount(); i++) {
					strName = p.getAttributeName(i);
					iAttr = iNode.getAttributeNode(strName);
					if (!iAttr) {
						iAttr = doc.createAttribute(strName);
					}
					iAttr.setValue(p.getAttributeValue(i));
					iNode.setAttributeNode(iAttr);
				}
			} else {
				iNode = doc.createElementNS("", p.getName());
				iNode._namespaces = iNodeParent._namespaces._cloneNodes(iNode);
				for ( var i = 0; i < p.getAttributeCount(); i++) {
					strName = p.getAttributeName(i);
					if (this._isNamespaceDeclaration(strName)) {
						var _1db6 = this._parseNSName(strName);
						if (strName != "xmlns") {
							iNS = doc.createNamespace(strName);
						} else {
							iNS = doc.createNamespace("");
						}
						iNS.setValue(p.getAttributeValue(i));
						iNode._namespaces.setNamedItem(iNS);
					} else {
						iAttr = iNode.getAttributeNode(strName);
						if (!iAttr) {
							iAttr = doc.createAttributeNS("", strName);
						}
						iAttr.setValue(p.getAttributeValue(i));
						iNode.setAttributeNodeNS(iAttr);
						if (this._isIdDeclaration(strName)) {
							iNode.id = p.getAttributeValue(i);
						}
					}
				}
				if (iNode._namespaces.getNamedItem(iNode.prefix)) {
					iNode.namespaceURI = iNode._namespaces
							.getNamedItem(iNode.prefix).value;
				}
				for ( var i = 0; i < iNode.attributes.length; i++) {
					if (iNode.attributes.item(i).prefix != "") {
						if (iNode._namespaces.getNamedItem(iNode.attributes
								.item(i).prefix)) {
							iNode.attributes.item(i).namespaceURI = iNode._namespaces
									.getNamedItem(iNode.attributes.item(i).prefix).value;
						}
					}
				}
			}
			if (iNodeParent.nodeType == DOMNode.DOCUMENT_NODE) {
				iNodeParent.documentElement = iNode;
			}
			iNodeParent.appendChild(iNode);
			iNodeParent = iNode;
		} else {
			if (iEvt == XMLP._ELM_E) {
				iNodeParent = iNodeParent.parentNode;
			} else {
				if (iEvt == XMLP._ELM_EMP) {
					pName = p.getName();
					pName = trim(pName, true, true);
					if (!this.namespaceAware) {
						iNode = doc.createElement(pName);
						for ( var i = 0; i < p.getAttributeCount(); i++) {
							strName = p.getAttributeName(i);
							iAttr = iNode.getAttributeNode(strName);
							if (!iAttr) {
								iAttr = doc.createAttribute(strName);
							}
							iAttr.setValue(p.getAttributeValue(i));
							iNode.setAttributeNode(iAttr);
						}
					} else {
						iNode = doc.createElementNS("", p.getName());
						iNode._namespaces = iNodeParent._namespaces
								._cloneNodes(iNode);
						for ( var i = 0; i < p.getAttributeCount(); i++) {
							strName = p.getAttributeName(i);
							if (this._isNamespaceDeclaration(strName)) {
								var _1db6 = this._parseNSName(strName);
								if (strName != "xmlns") {
									iNS = doc.createNamespace(strName);
								} else {
									iNS = doc.createNamespace("");
								}
								iNS.setValue(p.getAttributeValue(i));
								iNode._namespaces.setNamedItem(iNS);
							} else {
								iAttr = iNode.getAttributeNode(strName);
								if (!iAttr) {
									iAttr = doc.createAttributeNS("", strName);
								}
								iAttr.setValue(p.getAttributeValue(i));
								iNode.setAttributeNodeNS(iAttr);
								if (this._isIdDeclaration(strName)) {
									iNode.id = p.getAttributeValue(i);
								}
							}
						}
						if (iNode._namespaces.getNamedItem(iNode.prefix)) {
							iNode.namespaceURI = iNode._namespaces
									.getNamedItem(iNode.prefix).value;
						}
						for ( var i = 0; i < iNode.attributes.length; i++) {
							if (iNode.attributes.item(i).prefix != "") {
								if (iNode._namespaces
										.getNamedItem(iNode.attributes.item(i).prefix)) {
									iNode.attributes.item(i).namespaceURI = iNode._namespaces
											.getNamedItem(iNode.attributes
													.item(i).prefix).value;
								}
							}
						}
					}
					if (iNodeParent.nodeType == DOMNode.DOCUMENT_NODE) {
						iNodeParent.documentElement = iNode;
					}
					iNodeParent.appendChild(iNode);
				} else {
					if (iEvt == XMLP._TEXT || iEvt == XMLP._ENTITY) {
						var _1db7 = p.getContent().substring(
								p.getContentBegin(), p.getContentEnd());
						if (!this.preserveWhiteSpace) {
							if (trim(_1db7, true, true) == "") {
								_1db7 = "";
							}
						}
						if (_1db7.length > 0) {
							var _1db8 = doc.createTextNode(_1db7);
							iNodeParent.appendChild(_1db8);
							if (iEvt == XMLP._ENTITY) {
								_1db1[_1db1.length] = _1db8;
							} else {
								_1db2[_1db2.length] = _1db8;
							}
						}
					} else {
						if (iEvt == XMLP._PI) {
							iNodeParent.appendChild(doc
									.createProcessingInstruction(p.getName(), p
											.getContent().substring(
													p.getContentBegin(),
													p.getContentEnd())));
						} else {
							if (iEvt == XMLP._CDATA) {
								_1db7 = p.getContent().substring(
										p.getContentBegin(), p.getContentEnd());
								if (!this.preserveWhiteSpace) {
									_1db7 = trim(_1db7, true, true);
									_1db7.replace(/ +/g, " ");
								}
								if (_1db7.length > 0) {
									iNodeParent.appendChild(doc
											.createCDATASection(_1db7));
								}
							} else {
								if (iEvt == XMLP._COMMENT) {
									var _1db7 = p.getContent().substring(
											p.getContentBegin(),
											p.getContentEnd());
									if (!this.preserveWhiteSpace) {
										_1db7 = trim(_1db7, true, true);
										_1db7.replace(/ +/g, " ");
									}
									if (_1db7.length > 0) {
										iNodeParent.appendChild(doc
												.createComment(_1db7));
									}
								} else {
									if (iEvt == XMLP._DTD) {
									} else {
										if (iEvt == XMLP._ERROR) {
											throw (new DOMException(
													DOMException.SYNTAX_ERR));
										} else {
											if (iEvt == XMLP._NONE) {
												if (iNodeParent == doc) {
													break;
												} else {
													throw (new DOMException(
															DOMException.SYNTAX_ERR));
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	var _1db9 = _1db1.length;
	for (intLoop = 0; intLoop < _1db9; intLoop++) {
		var _1dba = _1db1[intLoop];
		var _1dbb = _1dba.getParentNode();
		if (_1dbb) {
			_1dbb.normalize();
			if (!this.preserveWhiteSpace) {
				var _1dbc = _1dbb.getChildNodes();
				var _1dbd = _1dbc.getLength();
				for (intLoop2 = 0; intLoop2 < _1dbd; intLoop2++) {
					var child = _1dbc.item(intLoop2);
					if (child.getNodeType() == DOMNode.TEXT_NODE) {
						var _1dbf = child.getData();
						_1dbf = trim(_1dbf, true, true);
						_1dbf.replace(/ +/g, " ");
						child.setData(_1dbf);
					}
				}
			}
		}
	}
	if (!this.preserveWhiteSpace) {
		var _1db9 = _1db2.length;
		for (intLoop = 0; intLoop < _1db9; intLoop++) {
			var node = _1db2[intLoop];
			if (node.getParentNode() !== null) {
				var _1dc1 = node.getData();
				_1dc1 = trim(_1dc1, true, true);
				_1dc1.replace(/ +/g, " ");
				node.setData(_1dc1);
			}
		}
	}
};
DOMImplementation.prototype._isNamespaceDeclaration = function DOMImplementation__isNamespaceDeclaration(
		_1dc2) {
	return (_1dc2.indexOf("xmlns") > -1);
};
DOMImplementation.prototype._isIdDeclaration = function DOMImplementation__isIdDeclaration(
		_1dc3) {
	return (_1dc3.toLowerCase() == "id");
};
DOMImplementation.prototype._isValidName = function DOMImplementation__isValidName(
		name) {
	return name.match(re_validName);
};
re_validName = /^[a-zA-Z_:][a-zA-Z0-9\.\-_:]*$/;
DOMImplementation.prototype._isValidString = function DOMImplementation__isValidString(
		name) {
	return (name.search(re_invalidStringChars) < 0);
};
re_invalidStringChars = /\x01|\x02|\x03|\x04|\x05|\x06|\x07|\x08|\x0B|\x0C|\x0E|\x0F|\x10|\x11|\x12|\x13|\x14|\x15|\x16|\x17|\x18|\x19|\x1A|\x1B|\x1C|\x1D|\x1E|\x1F|\x7F/;
DOMImplementation.prototype._parseNSName = function DOMImplementation__parseNSName(
		_1dc6) {
	var _1dc7 = {};
	_1dc7.prefix = _1dc6;
	_1dc7.namespaceName = "";
	delimPos = _1dc6.indexOf(":");
	if (delimPos > -1) {
		_1dc7.prefix = _1dc6.substring(0, delimPos);
		_1dc7.namespaceName = _1dc6.substring(delimPos + 1, _1dc6.length);
	}
	return _1dc7;
};
DOMImplementation.prototype._parseQName = function DOMImplementation__parseQName(
		_1dc8) {
	var _1dc9 = {};
	_1dc9.localName = _1dc8;
	_1dc9.prefix = "";
	delimPos = _1dc8.indexOf(":");
	if (delimPos > -1) {
		_1dc9.prefix = _1dc8.substring(0, delimPos);
		_1dc9.localName = _1dc8.substring(delimPos + 1, _1dc8.length);
	}
	return _1dc9;
};
DOMNodeList = function(_1dca, _1dcb) {
	this._class = addClass(this._class, "DOMNodeList");
	this._nodes = [];
	this.length = 0;
	this.parentNode = _1dcb;
	this.ownerDocument = _1dca;
	this._readonly = false;
};
DOMNodeList.prototype.getLength = function DOMNodeList_getLength() {
	return this.length;
};
DOMNodeList.prototype.item = function DOMNodeList_item(index) {
	var ret = null;
	if ((index >= 0) && (index < this._nodes.length)) {
		ret = this._nodes[index];
	}
	return ret;
};
DOMNodeList.prototype._findItemIndex = function DOMNodeList__findItemIndex(id) {
	var ret = -1;
	if (id > -1) {
		for ( var i = 0; i < this._nodes.length; i++) {
			if (this._nodes[i]._id == id) {
				ret = i;
				break;
			}
		}
	}
	return ret;
};
DOMNodeList.prototype._insertBefore = function DOMNodeList__insertBefore(_1dd1,
		_1dd2) {
	if ((_1dd2 >= 0) && (_1dd2 < this._nodes.length)) {
		var _1dd3 = [];
		_1dd3 = this._nodes.slice(0, _1dd2);
		if (_1dd1.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
			_1dd3 = _1dd3.concat(_1dd1.childNodes._nodes);
		} else {
			_1dd3[_1dd3.length] = _1dd1;
		}
		this._nodes = _1dd3.concat(this._nodes.slice(_1dd2));
		this.length = this._nodes.length;
	}
};
DOMNodeList.prototype._replaceChild = function DOMNodeList__replaceChild(_1dd4,
		_1dd5) {
	var ret = null;
	if ((_1dd5 >= 0) && (_1dd5 < this._nodes.length)) {
		ret = this._nodes[_1dd5];
		if (_1dd4.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
			var _1dd7 = [];
			_1dd7 = this._nodes.slice(0, _1dd5);
			_1dd7 = _1dd7.concat(_1dd4.childNodes._nodes);
			this._nodes = _1dd7.concat(this._nodes.slice(_1dd5 + 1));
		} else {
			this._nodes[_1dd5] = _1dd4;
		}
	}
	return ret;
};
DOMNodeList.prototype._removeChild = function DOMNodeList__removeChild(_1dd8) {
	var ret = null;
	if (_1dd8 > -1) {
		ret = this._nodes[_1dd8];
		var _1dda = [];
		_1dda = this._nodes.slice(0, _1dd8);
		this._nodes = _1dda.concat(this._nodes.slice(_1dd8 + 1));
		this.length = this._nodes.length;
	}
	return ret;
};
DOMNodeList.prototype._appendChild = function DOMNodeList__appendChild(_1ddb) {
	if (_1ddb.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
		this._nodes = this._nodes.concat(_1ddb.childNodes._nodes);
	} else {
		this._nodes[this._nodes.length] = _1ddb;
	}
	this.length = this._nodes.length;
};
DOMNodeList.prototype._cloneNodes = function DOMNodeList__cloneNodes(deep,
		_1ddd) {
	var _1dde = new DOMNodeList(this.ownerDocument, _1ddd);
	for ( var i = 0; i < this._nodes.length; i++) {
		_1dde._appendChild(this._nodes[i].cloneNode(deep));
	}
	return _1dde;
};
DOMNodeList.prototype.toString = function DOMNodeList_toString() {
	var ret = "";
	for ( var i = 0; i < this.length; i++) {
		ret += this._nodes[i].toString();
	}
	return ret;
};
DOMNamedNodeMap = function(_1de2, _1de3) {
	this._class = addClass(this._class, "DOMNamedNodeMap");
	this.DOMNodeList = DOMNodeList;
	this.DOMNodeList(_1de2, _1de3);
};
DOMNamedNodeMap.prototype = new DOMNodeList;
DOMNamedNodeMap.prototype.getNamedItem = function DOMNamedNodeMap_getNamedItem(
		name) {
	var ret = null;
	var _1de6 = this._findNamedItemIndex(name);
	if (_1de6 > -1) {
		ret = this._nodes[_1de6];
	}
	return ret;
};
DOMNamedNodeMap.prototype.setNamedItem = function DOMNamedNodeMap_setNamedItem(
		arg) {
	if (this.ownerDocument.implementation.errorChecking) {
		if (this.ownerDocument != arg.ownerDocument) {
			throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
		}
		if (this._readonly || (this.parentNode && this.parentNode._readonly)) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (arg.ownerElement && (arg.ownerElement != this.parentNode)) {
			throw (new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
		}
	}
	var _1de8 = this._findNamedItemIndex(arg.name);
	var ret = null;
	if (_1de8 > -1) {
		ret = this._nodes[_1de8];
		if (this.ownerDocument.implementation.errorChecking && ret._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		} else {
			this._nodes[_1de8] = arg;
		}
	} else {
		this._nodes[this.length] = arg;
	}
	this.length = this._nodes.length;
	arg.ownerElement = this.parentNode;
	return ret;
};
DOMNamedNodeMap.prototype.removeNamedItem = function DOMNamedNodeMap_removeNamedItem(
		name) {
	var ret = null;
	if (this.ownerDocument.implementation.errorChecking
			&& (this._readonly || (this.parentNode && this.parentNode._readonly))) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	var _1dec = this._findNamedItemIndex(name);
	if (this.ownerDocument.implementation.errorChecking && (_1dec < 0)) {
		throw (new DOMException(DOMException.NOT_FOUND_ERR));
	}
	var _1ded = this._nodes[_1dec];
	if (this.ownerDocument.implementation.errorChecking && _1ded._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	return this._removeChild(_1dec);
};
DOMNamedNodeMap.prototype.getNamedItemNS = function DOMNamedNodeMap_getNamedItemNS(
		_1dee, _1def) {
	var ret = null;
	var _1df1 = this._findNamedItemNSIndex(_1dee, _1def);
	if (_1df1 > -1) {
		ret = this._nodes[_1df1];
	}
	return ret;
};
DOMNamedNodeMap.prototype.setNamedItemNS = function DOMNamedNodeMap_setNamedItemNS(
		arg) {
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly || (this.parentNode && this.parentNode._readonly)) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (this.ownerDocument != arg.ownerDocument) {
			throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
		}
		if (arg.ownerElement && (arg.ownerElement != this.parentNode)) {
			throw (new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
		}
	}
	var _1df3 = this._findNamedItemNSIndex(arg.namespaceURI, arg.localName);
	var ret = null;
	if (_1df3 > -1) {
		ret = this._nodes[_1df3];
		if (this.ownerDocument.implementation.errorChecking && ret._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		} else {
			this._nodes[_1df3] = arg;
		}
	} else {
		this._nodes[this.length] = arg;
	}
	this.length = this._nodes.length;
	arg.ownerElement = this.parentNode;
	return ret;
};
DOMNamedNodeMap.prototype.removeNamedItemNS = function DOMNamedNodeMap_removeNamedItemNS(
		_1df5, _1df6) {
	var ret = null;
	if (this.ownerDocument.implementation.errorChecking
			&& (this._readonly || (this.parentNode && this.parentNode._readonly))) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	var _1df8 = this._findNamedItemNSIndex(_1df5, _1df6);
	if (this.ownerDocument.implementation.errorChecking && (_1df8 < 0)) {
		throw (new DOMException(DOMException.NOT_FOUND_ERR));
	}
	var _1df9 = this._nodes[_1df8];
	if (this.ownerDocument.implementation.errorChecking && _1df9._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	return this._removeChild(_1df8);
};
DOMNamedNodeMap.prototype._findNamedItemIndex = function DOMNamedNodeMap__findNamedItemIndex(
		name) {
	var ret = -1;
	for ( var i = 0; i < this._nodes.length; i++) {
		if (this._nodes[i].name == name) {
			ret = i;
			break;
		}
	}
	return ret;
};
DOMNamedNodeMap.prototype._findNamedItemNSIndex = function DOMNamedNodeMap__findNamedItemNSIndex(
		_1dfd, _1dfe) {
	var ret = -1;
	if (_1dfe) {
		for ( var i = 0; i < this._nodes.length; i++) {
			if ((this._nodes[i].namespaceURI == _1dfd)
					&& (this._nodes[i].localName == _1dfe)) {
				ret = i;
				break;
			}
		}
	}
	return ret;
};
DOMNamedNodeMap.prototype._hasAttribute = function DOMNamedNodeMap__hasAttribute(
		name) {
	var ret = false;
	var _1e03 = this._findNamedItemIndex(name);
	if (_1e03 > -1) {
		ret = true;
	}
	return ret;
};
DOMNamedNodeMap.prototype._hasAttributeNS = function DOMNamedNodeMap__hasAttributeNS(
		_1e04, _1e05) {
	var ret = false;
	var _1e07 = this._findNamedItemNSIndex(_1e04, _1e05);
	if (_1e07 > -1) {
		ret = true;
	}
	return ret;
};
DOMNamedNodeMap.prototype._cloneNodes = function DOMNamedNodeMap__cloneNodes(
		_1e08) {
	var _1e09 = new DOMNamedNodeMap(this.ownerDocument, _1e08);
	for ( var i = 0; i < this._nodes.length; i++) {
		_1e09._appendChild(this._nodes[i].cloneNode(false));
	}
	return _1e09;
};
DOMNamedNodeMap.prototype.toString = function DOMNamedNodeMap_toString() {
	var ret = "";
	for ( var i = 0; i < this.length - 1; i++) {
		ret += this._nodes[i].toString() + " ";
	}
	if (this.length > 0) {
		ret += this._nodes[this.length - 1].toString();
	}
	return ret;
};
DOMNamespaceNodeMap = function(_1e0d, _1e0e) {
	this._class = addClass(this._class, "DOMNamespaceNodeMap");
	this.DOMNamedNodeMap = DOMNamedNodeMap;
	this.DOMNamedNodeMap(_1e0d, _1e0e);
};
DOMNamespaceNodeMap.prototype = new DOMNamedNodeMap;
DOMNamespaceNodeMap.prototype._findNamedItemIndex = function DOMNamespaceNodeMap__findNamedItemIndex(
		_1e0f) {
	var ret = -1;
	for ( var i = 0; i < this._nodes.length; i++) {
		if (this._nodes[i].localName == _1e0f) {
			ret = i;
			break;
		}
	}
	return ret;
};
DOMNamespaceNodeMap.prototype._cloneNodes = function DOMNamespaceNodeMap__cloneNodes(
		_1e12) {
	var _1e13 = new DOMNamespaceNodeMap(this.ownerDocument, _1e12);
	for ( var i = 0; i < this._nodes.length; i++) {
		_1e13._appendChild(this._nodes[i].cloneNode(false));
	}
	return _1e13;
};
DOMNamespaceNodeMap.prototype.toString = function DOMNamespaceNodeMap_toString() {
	var ret = "";
	for ( var ind = 0; ind < this._nodes.length; ind++) {
		var ns = null;
		try {
			var ns = this.parentNode.parentNode._namespaces
					.getNamedItem(this._nodes[ind].localName);
		} catch (e) {
			break;
		}
		if (!(ns && ("" + ns.nodeValue == "" + this._nodes[ind].nodeValue))) {
			ret += this._nodes[ind].toString() + " ";
		}
	}
	return ret;
};
DOMNode = function(_1e18) {
	this._class = addClass(this._class, "DOMNode");
	if (_1e18) {
		this._id = _1e18._genId();
	}
	this.namespaceURI = "";
	this.prefix = "";
	this.localName = "";
	this.nodeName = "";
	this.nodeValue = "";
	this.nodeType = 0;
	this.parentNode = null;
	this.childNodes = new DOMNodeList(_1e18, this);
	this.firstChild = null;
	this.lastChild = null;
	this.previousSibling = null;
	this.nextSibling = null;
	this.attributes = new DOMNamedNodeMap(_1e18, this);
	this.ownerDocument = _1e18;
	this._namespaces = new DOMNamespaceNodeMap(_1e18, this);
	this._readonly = false;
};
DOMNode.ELEMENT_NODE = 1;
DOMNode.ATTRIBUTE_NODE = 2;
DOMNode.TEXT_NODE = 3;
DOMNode.CDATA_SECTION_NODE = 4;
DOMNode.ENTITY_REFERENCE_NODE = 5;
DOMNode.ENTITY_NODE = 6;
DOMNode.PROCESSING_INSTRUCTION_NODE = 7;
DOMNode.COMMENT_NODE = 8;
DOMNode.DOCUMENT_NODE = 9;
DOMNode.DOCUMENT_TYPE_NODE = 10;
DOMNode.DOCUMENT_FRAGMENT_NODE = 11;
DOMNode.NOTATION_NODE = 12;
DOMNode.NAMESPACE_NODE = 13;
DOMNode.prototype.hasAttributes = function DOMNode_hasAttributes() {
	if (this.attributes.length === 0) {
		return false;
	} else {
		return true;
	}
};
DOMNode.prototype.getNodeName = function DOMNode_getNodeName() {
	return this.nodeName;
};
DOMNode.prototype.getNodeValue = function DOMNode_getNodeValue() {
	return this.nodeValue;
};
DOMNode.prototype.setNodeValue = function DOMNode_setNodeValue(_1e19) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	this.nodeValue = _1e19;
};
DOMNode.prototype.getNodeType = function DOMNode_getNodeType() {
	return this.nodeType;
};
DOMNode.prototype.getParentNode = function DOMNode_getParentNode() {
	return this.parentNode;
};
DOMNode.prototype.getChildNodes = function DOMNode_getChildNodes() {
	return this.childNodes;
};
DOMNode.prototype.getFirstChild = function DOMNode_getFirstChild() {
	return this.firstChild;
};
DOMNode.prototype.getLastChild = function DOMNode_getLastChild() {
	return this.lastChild;
};
DOMNode.prototype.getPreviousSibling = function DOMNode_getPreviousSibling() {
	return this.previousSibling;
};
DOMNode.prototype.getNextSibling = function DOMNode_getNextSibling() {
	return this.nextSibling;
};
DOMNode.prototype.getAttributes = function DOMNode_getAttributes() {
	return this.attributes;
};
DOMNode.prototype.getOwnerDocument = function DOMNode_getOwnerDocument() {
	return this.ownerDocument;
};
DOMNode.prototype.getNamespaceURI = function DOMNode_getNamespaceURI() {
	return this.namespaceURI;
};
DOMNode.prototype.getPrefix = function DOMNode_getPrefix() {
	return this.prefix;
};
DOMNode.prototype.setPrefix = function DOMNode_setPrefix(_1e1a) {
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (!this.ownerDocument.implementation._isValidName(_1e1a)) {
			throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
		}
		if (!this.ownerDocument._isValidNamespace(this.namespaceURI, _1e1a
				+ ":" + this.localName)) {
			throw (new DOMException(DOMException.NAMESPACE_ERR));
		}
		if ((_1e1a == "xmlns")
				&& (this.namespaceURI != "http://www.w3.org/2000/xmlns/")) {
			throw (new DOMException(DOMException.NAMESPACE_ERR));
		}
		if ((_1e1a == "") && (this.localName == "xmlns")) {
			throw (new DOMException(DOMException.NAMESPACE_ERR));
		}
	}
	this.prefix = _1e1a;
	if (this.prefix != "") {
		this.nodeName = this.prefix + ":" + this.localName;
	} else {
		this.nodeName = this.localName;
	}
};
DOMNode.prototype.getLocalName = function DOMNode_getLocalName() {
	return this.localName;
};
DOMNode.prototype.insertBefore = function DOMNode_insertBefore(_1e1b, _1e1c) {
	var _1e1d;
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (this.ownerDocument != _1e1b.ownerDocument) {
			throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
		}
		if (this._isAncestor(_1e1b)) {
			throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
		}
	}
	if (_1e1c) {
		var _1e1e = this.childNodes._findItemIndex(_1e1c._id);
		if (this.ownerDocument.implementation.errorChecking && (_1e1e < 0)) {
			throw (new DOMException(DOMException.NOT_FOUND_ERR));
		}
		var _1e1f = _1e1b.parentNode;
		if (_1e1f) {
			_1e1f.removeChild(_1e1b);
		}
		this.childNodes._insertBefore(_1e1b, this.childNodes
				._findItemIndex(_1e1c._id));
		_1e1d = _1e1c.previousSibling;
		if (_1e1b.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
			if (_1e1b.childNodes._nodes.length > 0) {
				for ( var ind = 0; ind < _1e1b.childNodes._nodes.length; ind++) {
					_1e1b.childNodes._nodes[ind].parentNode = this;
				}
				_1e1c.previousSibling = _1e1b.childNodes._nodes[_1e1b.childNodes._nodes.length - 1];
			}
		} else {
			_1e1b.parentNode = this;
			_1e1c.previousSibling = _1e1b;
		}
	} else {
		_1e1d = this.lastChild;
		this.appendChild(_1e1b);
	}
	if (_1e1b.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
		if (_1e1b.childNodes._nodes.length > 0) {
			if (_1e1d) {
				_1e1d.nextSibling = _1e1b.childNodes._nodes[0];
			} else {
				this.firstChild = _1e1b.childNodes._nodes[0];
			}
			_1e1b.childNodes._nodes[0].previousSibling = _1e1d;
			_1e1b.childNodes._nodes[_1e1b.childNodes._nodes.length - 1].nextSibling = _1e1c;
		}
	} else {
		if (_1e1d) {
			_1e1d.nextSibling = _1e1b;
		} else {
			this.firstChild = _1e1b;
		}
		_1e1b.previousSibling = _1e1d;
		_1e1b.nextSibling = _1e1c;
	}
	return _1e1b;
};
DOMNode.prototype.replaceChild = function DOMNode_replaceChild(_1e21, _1e22) {
	var ret = null;
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (this.ownerDocument != _1e21.ownerDocument) {
			throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
		}
		if (this._isAncestor(_1e21)) {
			throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
		}
	}
	var index = this.childNodes._findItemIndex(_1e22._id);
	if (this.ownerDocument.implementation.errorChecking && (index < 0)) {
		throw (new DOMException(DOMException.NOT_FOUND_ERR));
	}
	var _1e25 = _1e21.parentNode;
	if (_1e25) {
		_1e25.removeChild(_1e21);
	}
	ret = this.childNodes._replaceChild(_1e21, index);
	if (_1e21.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
		if (_1e21.childNodes._nodes.length > 0) {
			for ( var ind = 0; ind < _1e21.childNodes._nodes.length; ind++) {
				_1e21.childNodes._nodes[ind].parentNode = this;
			}
			if (_1e22.previousSibling) {
				_1e22.previousSibling.nextSibling = _1e21.childNodes._nodes[0];
			} else {
				this.firstChild = _1e21.childNodes._nodes[0];
			}
			if (_1e22.nextSibling) {
				_1e22.nextSibling.previousSibling = _1e21;
			} else {
				this.lastChild = _1e21.childNodes._nodes[_1e21.childNodes._nodes.length - 1];
			}
			_1e21.childNodes._nodes[0].previousSibling = _1e22.previousSibling;
			_1e21.childNodes._nodes[_1e21.childNodes._nodes.length - 1].nextSibling = _1e22.nextSibling;
		}
	} else {
		_1e21.parentNode = this;
		if (_1e22.previousSibling) {
			_1e22.previousSibling.nextSibling = _1e21;
		} else {
			this.firstChild = _1e21;
		}
		if (_1e22.nextSibling) {
			_1e22.nextSibling.previousSibling = _1e21;
		} else {
			this.lastChild = _1e21;
		}
		_1e21.previousSibling = _1e22.previousSibling;
		_1e21.nextSibling = _1e22.nextSibling;
	}
	return ret;
};
DOMNode.prototype.removeChild = function DOMNode_removeChild(_1e27) {
	if (this.ownerDocument.implementation.errorChecking
			&& (this._readonly || _1e27._readonly)) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	var _1e28 = this.childNodes._findItemIndex(_1e27._id);
	if (this.ownerDocument.implementation.errorChecking && (_1e28 < 0)) {
		throw (new DOMException(DOMException.NOT_FOUND_ERR));
	}
	this.childNodes._removeChild(_1e28);
	_1e27.parentNode = null;
	if (_1e27.previousSibling) {
		_1e27.previousSibling.nextSibling = _1e27.nextSibling;
	} else {
		this.firstChild = _1e27.nextSibling;
	}
	if (_1e27.nextSibling) {
		_1e27.nextSibling.previousSibling = _1e27.previousSibling;
	} else {
		this.lastChild = _1e27.previousSibling;
	}
	_1e27.previousSibling = null;
	_1e27.nextSibling = null;
	return _1e27;
};
DOMNode.prototype.appendChild = function DOMNode_appendChild(_1e29) {
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (this.ownerDocument != _1e29.ownerDocument) {
			throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
		}
		if (this._isAncestor(_1e29)) {
			throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
		}
	}
	var _1e2a = _1e29.parentNode;
	if (_1e2a) {
		_1e2a.removeChild(_1e29);
	}
	this.childNodes._appendChild(_1e29);
	if (_1e29.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
		if (_1e29.childNodes._nodes.length > 0) {
			for ( var ind = 0; ind < _1e29.childNodes._nodes.length; ind++) {
				_1e29.childNodes._nodes[ind].parentNode = this;
			}
			if (this.lastChild) {
				this.lastChild.nextSibling = _1e29.childNodes._nodes[0];
				_1e29.childNodes._nodes[0].previousSibling = this.lastChild;
				this.lastChild = _1e29.childNodes._nodes[_1e29.childNodes._nodes.length - 1];
			} else {
				this.lastChild = _1e29.childNodes._nodes[_1e29.childNodes._nodes.length - 1];
				this.firstChild = _1e29.childNodes._nodes[0];
			}
		}
	} else {
		_1e29.parentNode = this;
		if (this.lastChild) {
			this.lastChild.nextSibling = _1e29;
			_1e29.previousSibling = this.lastChild;
			this.lastChild = _1e29;
		} else {
			this.lastChild = _1e29;
			this.firstChild = _1e29;
		}
	}
	return _1e29;
};
DOMNode.prototype.hasChildNodes = function DOMNode_hasChildNodes() {
	return (this.childNodes.length > 0);
};
DOMNode.prototype.cloneNode = function DOMNode_cloneNode(deep) {
	try {
		return this.ownerDocument.importNode(this, deep);
	} catch (e) {
		return null;
	}
};
DOMNode.prototype.normalize = function DOMNode_normalize() {
	var inode;
	var _1e2e = new DOMNodeList();
	if (this.nodeType == DOMNode.ELEMENT_NODE
			|| this.nodeType == DOMNode.DOCUMENT_NODE) {
		var _1e2f = null;
		for ( var i = 0; i < this.childNodes.length; i++) {
			inode = this.childNodes.item(i);
			if (inode.nodeType == DOMNode.TEXT_NODE) {
				if (inode.length < 1) {
					_1e2e._appendChild(inode);
				} else {
					if (_1e2f) {
						_1e2f.appendData(inode.data);
						_1e2e._appendChild(inode);
					} else {
						_1e2f = inode;
					}
				}
			} else {
				_1e2f = null;
				inode.normalize();
			}
		}
		for ( var i = 0; i < _1e2e.length; i++) {
			inode = _1e2e.item(i);
			inode.parentNode.removeChild(inode);
		}
	}
};
DOMNode.prototype.isSupported = function DOMNode_isSupported(_1e31, _1e32) {
	return this.ownerDocument.implementation.hasFeature(_1e31, _1e32);
};
DOMNode.prototype.getElementsByTagName = function DOMNode_getElementsByTagName(
		_1e33) {
	return this._getElementsByTagNameRecursive(_1e33, new DOMNodeList(
			this.ownerDocument));
};
DOMNode.prototype._getElementsByTagNameRecursive = function DOMNode__getElementsByTagNameRecursive(
		_1e34, _1e35) {
	if (this.nodeType == DOMNode.ELEMENT_NODE
			|| this.nodeType == DOMNode.DOCUMENT_NODE) {
		if ((this.nodeName == _1e34) || (_1e34 == "*")) {
			_1e35._appendChild(this);
		}
		for ( var i = 0; i < this.childNodes.length; i++) {
			_1e35 = this.childNodes.item(i)._getElementsByTagNameRecursive(
					_1e34, _1e35);
		}
	}
	return _1e35;
};
DOMNode.prototype.getXML = function DOMNode_getXML() {
	return this.toString();
};
DOMNode.prototype.getElementsByTagNameNS = function DOMNode_getElementsByTagNameNS(
		_1e37, _1e38) {
	return this._getElementsByTagNameNSRecursive(_1e37, _1e38, new DOMNodeList(
			this.ownerDocument));
};
DOMNode.prototype._getElementsByTagNameNSRecursive = function DOMNode__getElementsByTagNameNSRecursive(
		_1e39, _1e3a, _1e3b) {
	if (this.nodeType == DOMNode.ELEMENT_NODE
			|| this.nodeType == DOMNode.DOCUMENT_NODE) {
		if (((this.namespaceURI == _1e39) || (_1e39 == "*"))
				&& ((this.localName == _1e3a) || (_1e3a == "*"))) {
			_1e3b._appendChild(this);
		}
		for ( var i = 0; i < this.childNodes.length; i++) {
			_1e3b = this.childNodes.item(i)._getElementsByTagNameNSRecursive(
					_1e39, _1e3a, _1e3b);
		}
	}
	return _1e3b;
};
DOMNode.prototype._isAncestor = function DOMNode__isAncestor(node) {
	return ((this == node) || ((this.parentNode) && (this.parentNode
			._isAncestor(node))));
};
DOMNode.prototype.importNode = function DOMNode_importNode(_1e3e, deep) {
	var _1e40;
	this.getOwnerDocument()._performingImportNodeOperation = true;
	try {
		if (_1e3e.nodeType == DOMNode.ELEMENT_NODE) {
			if (!this.ownerDocument.implementation.namespaceAware) {
				_1e40 = this.ownerDocument.createElement(_1e3e.tagName);
				for ( var i = 0; i < _1e3e.attributes.length; i++) {
					_1e40.setAttribute(_1e3e.attributes.item(i).name,
							_1e3e.attributes.item(i).value);
				}
			} else {
				_1e40 = this.ownerDocument.createElementNS(_1e3e.namespaceURI,
						_1e3e.nodeName);
				for ( var i = 0; i < _1e3e.attributes.length; i++) {
					_1e40.setAttributeNS(_1e3e.attributes.item(i).namespaceURI,
							_1e3e.attributes.item(i).name, _1e3e.attributes
									.item(i).value);
				}
				for ( var i = 0; i < _1e3e._namespaces.length; i++) {
					_1e40._namespaces._nodes[i] = this.ownerDocument
							.createNamespace(_1e3e._namespaces.item(i).localName);
					_1e40._namespaces._nodes[i].setValue(_1e3e._namespaces
							.item(i).value);
				}
			}
		} else {
			if (_1e3e.nodeType == DOMNode.ATTRIBUTE_NODE) {
				if (!this.ownerDocument.implementation.namespaceAware) {
					_1e40 = this.ownerDocument.createAttribute(_1e3e.name);
				} else {
					_1e40 = this.ownerDocument.createAttributeNS(
							_1e3e.namespaceURI, _1e3e.nodeName);
					for ( var i = 0; i < _1e3e._namespaces.length; i++) {
						_1e40._namespaces._nodes[i] = this.ownerDocument
								.createNamespace(_1e3e._namespaces.item(i).localName);
						_1e40._namespaces._nodes[i].setValue(_1e3e._namespaces
								.item(i).value);
					}
				}
				_1e40.setValue(_1e3e.value);
			} else {
				if (_1e3e.nodeType == DOMNode.DOCUMENT_FRAGMENT) {
					_1e40 = this.ownerDocument.createDocumentFragment();
				} else {
					if (_1e3e.nodeType == DOMNode.NAMESPACE_NODE) {
						_1e40 = this.ownerDocument
								.createNamespace(_1e3e.nodeName);
						_1e40.setValue(_1e3e.value);
					} else {
						if (_1e3e.nodeType == DOMNode.TEXT_NODE) {
							_1e40 = this.ownerDocument
									.createTextNode(_1e3e.data);
						} else {
							if (_1e3e.nodeType == DOMNode.CDATA_SECTION_NODE) {
								_1e40 = this.ownerDocument
										.createCDATASection(_1e3e.data);
							} else {
								if (_1e3e.nodeType == DOMNode.PROCESSING_INSTRUCTION_NODE) {
									_1e40 = this.ownerDocument
											.createProcessingInstruction(
													_1e3e.target, _1e3e.data);
								} else {
									if (_1e3e.nodeType == DOMNode.COMMENT_NODE) {
										_1e40 = this.ownerDocument
												.createComment(_1e3e.data);
									} else {
										throw (new DOMException(
												DOMException.NOT_SUPPORTED_ERR));
									}
								}
							}
						}
					}
				}
			}
		}
		if (deep) {
			for ( var i = 0; i < _1e3e.childNodes.length; i++) {
				_1e40.appendChild(this.ownerDocument.importNode(
						_1e3e.childNodes.item(i), true));
			}
		}
		this.getOwnerDocument()._performingImportNodeOperation = false;
		return _1e40;
	} catch (eAny) {
		this.getOwnerDocument()._performingImportNodeOperation = false;
		throw eAny;
	}
};
DOMNode.prototype.__escapeString = function DOMNode__escapeString(str) {
	return __escapeString(str);
};
DOMNode.prototype.__unescapeString = function DOMNode__unescapeString(str) {
	return __unescapeString(str);
};
DOMDocument = function(_1e44) {
	this._class = addClass(this._class, "DOMDocument");
	this.DOMNode = DOMNode;
	this.DOMNode(this);
	this.doctype = null;
	this.implementation = _1e44;
	this.documentElement = null;
	this.all = [];
	this.nodeName = "#document";
	this.nodeType = DOMNode.DOCUMENT_NODE;
	this._id = 0;
	this._lastId = 0;
	this._parseComplete = false;
	this.ownerDocument = this;
	this._performingImportNodeOperation = false;
};
DOMDocument.prototype = new DOMNode;
DOMDocument.prototype.getDoctype = function DOMDocument_getDoctype() {
	return this.doctype;
};
DOMDocument.prototype.getImplementation = function DOMDocument_implementation() {
	return this.implementation;
};
DOMDocument.prototype.getDocumentElement = function DOMDocument_getDocumentElement() {
	return this.documentElement;
};
DOMDocument.prototype.createElement = function DOMDocument_createElement(_1e45) {
	if (this.ownerDocument.implementation.errorChecking
			&& (!this.ownerDocument.implementation._isValidName(_1e45))) {
		throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
	}
	var node = new DOMElement(this);
	node.tagName = _1e45;
	node.nodeName = _1e45;
	this.all[this.all.length] = node;
	return node;
};
DOMDocument.prototype.createDocumentFragment = function DOMDocument_createDocumentFragment() {
	var node = new DOMDocumentFragment(this);
	return node;
};
DOMDocument.prototype.createTextNode = function DOMDocument_createTextNode(data) {
	var node = new DOMText(this);
	node.data = data;
	node.nodeValue = data;
	node.length = data.length;
	return node;
};
DOMDocument.prototype.createComment = function DOMDocument_createComment(data) {
	var node = new DOMComment(this);
	node.data = data;
	node.nodeValue = data;
	node.length = data.length;
	return node;
};
DOMDocument.prototype.createCDATASection = function DOMDocument_createCDATASection(
		data) {
	var node = new DOMCDATASection(this);
	node.data = data;
	node.nodeValue = data;
	node.length = data.length;
	return node;
};
DOMDocument.prototype.createProcessingInstruction = function DOMDocument_createProcessingInstruction(
		_1e4e, data) {
	if (this.ownerDocument.implementation.errorChecking
			&& (!this.implementation._isValidName(_1e4e))) {
		throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
	}
	var node = new DOMProcessingInstruction(this);
	node.target = _1e4e;
	node.nodeName = _1e4e;
	node.data = data;
	node.nodeValue = data;
	node.length = data.length;
	return node;
};
DOMDocument.prototype.createAttribute = function DOMDocument_createAttribute(
		name) {
	if (this.ownerDocument.implementation.errorChecking
			&& (!this.ownerDocument.implementation._isValidName(name))) {
		throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
	}
	var node = new DOMAttr(this);
	node.name = name;
	node.nodeName = name;
	return node;
};
DOMDocument.prototype.createElementNS = function DOMDocument_createElementNS(
		_1e53, _1e54) {
	if (this.ownerDocument.implementation.errorChecking) {
		if (!this.ownerDocument._isValidNamespace(_1e53, _1e54)) {
			throw (new DOMException(DOMException.NAMESPACE_ERR));
		}
		if (!this.ownerDocument.implementation._isValidName(_1e54)) {
			throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
		}
	}
	var node = new DOMElement(this);
	var qname = this.implementation._parseQName(_1e54);
	node.nodeName = _1e54;
	node.namespaceURI = _1e53;
	node.prefix = qname.prefix;
	node.localName = qname.localName;
	node.tagName = _1e54;
	this.all[this.all.length] = node;
	return node;
};
DOMDocument.prototype.createAttributeNS = function DOMDocument_createAttributeNS(
		_1e57, _1e58) {
	if (this.ownerDocument.implementation.errorChecking) {
		if (!this.ownerDocument._isValidNamespace(_1e57, _1e58, true)) {
			throw (new DOMException(DOMException.NAMESPACE_ERR));
		}
		if (!this.ownerDocument.implementation._isValidName(_1e58)) {
			throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
		}
	}
	var node = new DOMAttr(this);
	var qname = this.implementation._parseQName(_1e58);
	node.nodeName = _1e58;
	node.namespaceURI = _1e57;
	node.prefix = qname.prefix;
	node.localName = qname.localName;
	node.name = _1e58;
	node.nodeValue = "";
	return node;
};
DOMDocument.prototype.createNamespace = function DOMDocument_createNamespace(
		_1e5b) {
	var node = new DOMNamespace(this);
	var qname = this.implementation._parseQName(_1e5b);
	node.nodeName = _1e5b;
	node.prefix = qname.prefix;
	node.localName = qname.localName;
	node.name = _1e5b;
	node.nodeValue = "";
	return node;
};
DOMDocument.prototype.getElementById = function DOMDocument_getElementById(
		_1e5e) {
	retNode = null;
	for ( var i = 0; i < this.all.length; i++) {
		var node = this.all[i];
		if ((node.id == _1e5e)
				&& (node._isAncestor(node.ownerDocument.documentElement))) {
			retNode = node;
			break;
		}
	}
	return retNode;
};
DOMDocument.prototype._genId = function DOMDocument__genId() {
	this._lastId += 1;
	return this._lastId;
};
DOMDocument.prototype._isValidNamespace = function DOMDocument__isValidNamespace(
		_1e61, _1e62, _1e63) {
	if (this._performingImportNodeOperation == true) {
		return true;
	}
	var valid = true;
	var qName = this.implementation._parseQName(_1e62);
	if (this._parseComplete == true) {
		if (qName.localName.indexOf(":") > -1) {
			valid = false;
		}
		if ((valid) && (!_1e63)) {
			if (!_1e61) {
				valid = false;
			}
		}
		if ((valid) && (qName.prefix == "")) {
			valid = false;
		}
	}
	if ((valid) && (qName.prefix == "xml")
			&& (_1e61 != "http://www.w3.org/XML/1998/namespace")) {
		valid = false;
	}
	return valid;
};
DOMDocument.prototype.toString = function DOMDocument_toString() {
	return "" + this.childNodes;
};
DOMElement = function(_1e66) {
	this._class = addClass(this._class, "DOMElement");
	this.DOMNode = DOMNode;
	this.DOMNode(_1e66);
	this.tagName = "";
	this.id = "";
	this.nodeType = DOMNode.ELEMENT_NODE;
};
DOMElement.prototype = new DOMNode;
DOMElement.prototype.getTagName = function DOMElement_getTagName() {
	return this.tagName;
};
DOMElement.prototype.getAttribute = function DOMElement_getAttribute(name) {
	var ret = "";
	var attr = this.attributes.getNamedItem(name);
	if (attr) {
		ret = attr.value;
	}
	return ret;
};
DOMElement.prototype.setAttribute = function DOMElement_setAttribute(name,
		value) {
	var attr = this.attributes.getNamedItem(name);
	if (!attr) {
		attr = this.ownerDocument.createAttribute(name);
	}
	var value = new String(value);
	if (this.ownerDocument.implementation.errorChecking) {
		if (attr._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (!this.ownerDocument.implementation._isValidString(value)) {
			throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
		}
	}
	if (this.ownerDocument.implementation._isIdDeclaration(name)) {
		this.id = value;
	}
	attr.value = value;
	attr.nodeValue = value;
	if (value.length > 0) {
		attr.specified = true;
	} else {
		attr.specified = false;
	}
	this.attributes.setNamedItem(attr);
};
DOMElement.prototype.removeAttribute = function DOMElement_removeAttribute(name) {
	return this.attributes.removeNamedItem(name);
};
DOMElement.prototype.getAttributeNode = function DOMElement_getAttributeNode(
		name) {
	return this.attributes.getNamedItem(name);
};
DOMElement.prototype.setAttributeNode = function DOMElement_setAttributeNode(
		_1e6f) {
	if (this.ownerDocument.implementation._isIdDeclaration(_1e6f.name)) {
		this.id = _1e6f.value;
	}
	return this.attributes.setNamedItem(_1e6f);
};
DOMElement.prototype.removeAttributeNode = function DOMElement_removeAttributeNode(
		_1e70) {
	if (this.ownerDocument.implementation.errorChecking && _1e70._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	var _1e71 = this.attributes._findItemIndex(_1e70._id);
	if (this.ownerDocument.implementation.errorChecking && (_1e71 < 0)) {
		throw (new DOMException(DOMException.NOT_FOUND_ERR));
	}
	return this.attributes._removeChild(_1e71);
};
DOMElement.prototype.getAttributeNS = function DOMElement_getAttributeNS(_1e72,
		_1e73) {
	var ret = "";
	var attr = this.attributes.getNamedItemNS(_1e72, _1e73);
	if (attr) {
		ret = attr.value;
	}
	return ret;
};
DOMElement.prototype.setAttributeNS = function DOMElement_setAttributeNS(_1e76,
		_1e77, value) {
	var attr = this.attributes.getNamedItem(_1e76, _1e77);
	if (!attr) {
		attr = this.ownerDocument.createAttributeNS(_1e76, _1e77);
	}
	var value = new String(value);
	if (this.ownerDocument.implementation.errorChecking) {
		if (attr._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if (!this.ownerDocument._isValidNamespace(_1e76, _1e77)) {
			throw (new DOMException(DOMException.NAMESPACE_ERR));
		}
		if (!this.ownerDocument.implementation._isValidString(value)) {
			throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
		}
	}
	if (this.ownerDocument.implementation._isIdDeclaration(name)) {
		this.id = value;
	}
	attr.value = value;
	attr.nodeValue = value;
	if (value.length > 0) {
		attr.specified = true;
	} else {
		attr.specified = false;
	}
	this.attributes.setNamedItemNS(attr);
};
DOMElement.prototype.removeAttributeNS = function DOMElement_removeAttributeNS(
		_1e7a, _1e7b) {
	return this.attributes.removeNamedItemNS(_1e7a, _1e7b);
};
DOMElement.prototype.getAttributeNodeNS = function DOMElement_getAttributeNodeNS(
		_1e7c, _1e7d) {
	return this.attributes.getNamedItemNS(_1e7c, _1e7d);
};
DOMElement.prototype.setAttributeNodeNS = function DOMElement_setAttributeNodeNS(
		_1e7e) {
	if ((_1e7e.prefix == "")
			&& this.ownerDocument.implementation._isIdDeclaration(_1e7e.name)) {
		this.id = _1e7e.value;
	}
	return this.attributes.setNamedItemNS(_1e7e);
};
DOMElement.prototype.hasAttribute = function DOMElement_hasAttribute(name) {
	return this.attributes._hasAttribute(name);
};
DOMElement.prototype.hasAttributeNS = function DOMElement_hasAttributeNS(_1e80,
		_1e81) {
	return this.attributes._hasAttributeNS(_1e80, _1e81);
};
DOMElement.prototype.toString = function DOMElement_toString() {
	var ret = "";
	var ns = this._namespaces.toString();
	if (ns.length > 0) {
		ns = " " + ns;
	}
	var attrs = this.attributes.toString();
	if (attrs.length > 0) {
		attrs = " " + attrs;
	}
	ret += "<" + this.nodeName + ns + attrs + ">";
	ret += this.childNodes.toString();
	ret += "</" + this.nodeName + ">";
	return ret;
};
DOMAttr = function(_1e85) {
	this._class = addClass(this._class, "DOMAttr");
	this.DOMNode = DOMNode;
	this.DOMNode(_1e85);
	this.name = "";
	this.specified = false;
	this.value = "";
	this.nodeType = DOMNode.ATTRIBUTE_NODE;
	this.ownerElement = null;
	this.childNodes = null;
	this.attributes = null;
};
DOMAttr.prototype = new DOMNode;
DOMAttr.prototype.getName = function DOMAttr_getName() {
	return this.nodeName;
};
DOMAttr.prototype.getSpecified = function DOMAttr_getSpecified() {
	return this.specified;
};
DOMAttr.prototype.getValue = function DOMAttr_getValue() {
	return this.nodeValue;
};
DOMAttr.prototype.setValue = function DOMAttr_setValue(value) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	this.setNodeValue(value);
};
DOMAttr.prototype.setNodeValue = function DOMAttr_setNodeValue(value) {
	this.nodeValue = new String(value);
	this.value = this.nodeValue;
	this.specified = (this.value.length > 0);
};
DOMAttr.prototype.toString = function DOMAttr_toString() {
	var ret = "";
	ret += this.nodeName + "=\"" + this.__escapeString(this.nodeValue) + "\"";
	return ret;
};
DOMAttr.prototype.getOwnerElement = function() {
	return this.ownerElement;
};
DOMNamespace = function(_1e89) {
	this._class = addClass(this._class, "DOMNamespace");
	this.DOMNode = DOMNode;
	this.DOMNode(_1e89);
	this.name = "";
	this.specified = false;
	this.value = "";
	this.nodeType = DOMNode.NAMESPACE_NODE;
};
DOMNamespace.prototype = new DOMNode;
DOMNamespace.prototype.getValue = function DOMNamespace_getValue() {
	return this.nodeValue;
};
DOMNamespace.prototype.setValue = function DOMNamespace_setValue(value) {
	this.nodeValue = new String(value);
	this.value = this.nodeValue;
};
DOMNamespace.prototype.toString = function DOMNamespace_toString() {
	var ret = "";
	if (this.nodeName != "") {
		ret += this.nodeName + "=\"" + this.__escapeString(this.nodeValue)
				+ "\"";
	} else {
		ret += "xmlns=\"" + this.__escapeString(this.nodeValue) + "\"";
	}
	return ret;
};
DOMCharacterData = function(_1e8c) {
	this._class = addClass(this._class, "DOMCharacterData");
	this.DOMNode = DOMNode;
	this.DOMNode(_1e8c);
	this.data = "";
	this.length = 0;
};
DOMCharacterData.prototype = new DOMNode;
DOMCharacterData.prototype.getData = function DOMCharacterData_getData() {
	return this.nodeValue;
};
DOMCharacterData.prototype.setData = function DOMCharacterData_setData(data) {
	this.setNodeValue(data);
};
DOMCharacterData.prototype.setNodeValue = function DOMCharacterData_setNodeValue(
		data) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	this.nodeValue = new String(data);
	this.data = this.nodeValue;
	this.length = this.nodeValue.length;
};
DOMCharacterData.prototype.getLength = function DOMCharacterData_getLength() {
	return this.nodeValue.length;
};
DOMCharacterData.prototype.substringData = function DOMCharacterData_substringData(
		_1e8f, count) {
	var ret = null;
	if (this.data) {
		if (this.ownerDocument.implementation.errorChecking
				&& ((_1e8f < 0) || (_1e8f > this.data.length) || (count < 0))) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
		if (!count) {
			ret = this.data.substring(_1e8f);
		} else {
			ret = this.data.substring(_1e8f, _1e8f + count);
		}
	}
	return ret;
};
DOMCharacterData.prototype.appendData = function DOMCharacterData_appendData(
		arg) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	this.setData("" + this.data + arg);
};
DOMCharacterData.prototype.insertData = function DOMCharacterData_insertData(
		_1e93, arg) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	if (this.data) {
		if (this.ownerDocument.implementation.errorChecking
				&& ((_1e93 < 0) || (_1e93 > this.data.length))) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
		this.setData(this.data.substring(0, _1e93).concat(arg,
				this.data.substring(_1e93)));
	} else {
		if (this.ownerDocument.implementation.errorChecking && (_1e93 != 0)) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
		this.setData(arg);
	}
};
DOMCharacterData.prototype.deleteData = function DOMCharacterData_deleteData(
		_1e95, count) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	if (this.data) {
		if (this.ownerDocument.implementation.errorChecking
				&& ((_1e95 < 0) || (_1e95 > this.data.length) || (count < 0))) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
		if (!count || (_1e95 + count) > this.data.length) {
			this.setData(this.data.substring(0, _1e95));
		} else {
			this.setData(this.data.substring(0, _1e95).concat(
					this.data.substring(_1e95 + count)));
		}
	}
};
DOMCharacterData.prototype.replaceData = function DOMCharacterData_replaceData(
		_1e97, count, arg) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	if (this.data) {
		if (this.ownerDocument.implementation.errorChecking
				&& ((_1e97 < 0) || (_1e97 > this.data.length) || (count < 0))) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
		this.setData(this.data.substring(0, _1e97).concat(arg,
				this.data.substring(_1e97 + count)));
	} else {
		this.setData(arg);
	}
};
DOMText = function(_1e9a) {
	this._class = addClass(this._class, "DOMText");
	this.DOMCharacterData = DOMCharacterData;
	this.DOMCharacterData(_1e9a);
	this.nodeName = "#text";
	this.nodeType = DOMNode.TEXT_NODE;
};
DOMText.prototype = new DOMCharacterData;
DOMText.prototype.splitText = function DOMText_splitText(_1e9b) {
	var data, inode;
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if ((_1e9b < 0) || (_1e9b > this.data.length)) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
	}
	if (this.parentNode) {
		data = this.substringData(_1e9b);
		inode = this.ownerDocument.createTextNode(data);
		if (this.nextSibling) {
			this.parentNode.insertBefore(inode, this.nextSibling);
		} else {
			this.parentNode.appendChild(inode);
		}
		this.deleteData(_1e9b);
	}
	return inode;
};
DOMText.prototype.toString = function DOMText_toString() {
	return this.__escapeString("" + this.nodeValue);
};
DOMCDATASection = function(_1e9d) {
	this._class = addClass(this._class, "DOMCDATASection");
	this.DOMCharacterData = DOMCharacterData;
	this.DOMCharacterData(_1e9d);
	this.nodeName = "#cdata-section";
	this.nodeType = DOMNode.CDATA_SECTION_NODE;
};
DOMCDATASection.prototype = new DOMCharacterData;
DOMCDATASection.prototype.splitText = function DOMCDATASection_splitText(_1e9e) {
	var data, inode;
	if (this.ownerDocument.implementation.errorChecking) {
		if (this._readonly) {
			throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
		}
		if ((_1e9e < 0) || (_1e9e > this.data.length)) {
			throw (new DOMException(DOMException.INDEX_SIZE_ERR));
		}
	}
	if (this.parentNode) {
		data = this.substringData(_1e9e);
		inode = this.ownerDocument.createCDATASection(data);
		if (this.nextSibling) {
			this.parentNode.insertBefore(inode, this.nextSibling);
		} else {
			this.parentNode.appendChild(inode);
		}
		this.deleteData(_1e9e);
	}
	return inode;
};
DOMCDATASection.prototype.toString = function DOMCDATASection_toString() {
	var ret = "";
	ret += "<![CDATA[" + this.nodeValue + "]]>";
	return ret;
};
DOMComment = function(_1ea1) {
	this._class = addClass(this._class, "DOMComment");
	this.DOMCharacterData = DOMCharacterData;
	this.DOMCharacterData(_1ea1);
	this.nodeName = "#comment";
	this.nodeType = DOMNode.COMMENT_NODE;
};
DOMComment.prototype = new DOMCharacterData;
DOMComment.prototype.toString = function DOMComment_toString() {
	var ret = "";
	ret += "<!--" + this.nodeValue + "-->";
	return ret;
};
DOMProcessingInstruction = function(_1ea3) {
	this._class = addClass(this._class, "DOMProcessingInstruction");
	this.DOMNode = DOMNode;
	this.DOMNode(_1ea3);
	this.target = "";
	this.data = "";
	this.nodeType = DOMNode.PROCESSING_INSTRUCTION_NODE;
};
DOMProcessingInstruction.prototype = new DOMNode;
DOMProcessingInstruction.prototype.getTarget = function DOMProcessingInstruction_getTarget() {
	return this.nodeName;
};
DOMProcessingInstruction.prototype.getData = function DOMProcessingInstruction_getData() {
	return this.nodeValue;
};
DOMProcessingInstruction.prototype.setData = function DOMProcessingInstruction_setData(
		data) {
	this.setNodeValue(data);
};
DOMProcessingInstruction.prototype.setNodeValue = function DOMProcessingInstruction_setNodeValue(
		data) {
	if (this.ownerDocument.implementation.errorChecking && this._readonly) {
		throw (new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
	}
	this.nodeValue = new String(data);
	this.data = this.nodeValue;
};
DOMProcessingInstruction.prototype.toString = function DOMProcessingInstruction_toString() {
	var ret = "";
	ret += "<?" + this.nodeName + " " + this.nodeValue + " ?>";
	return ret;
};
DOMDocumentFragment = function(_1ea7) {
	this._class = addClass(this._class, "DOMDocumentFragment");
	this.DOMNode = DOMNode;
	this.DOMNode(_1ea7);
	this.nodeName = "#document-fragment";
	this.nodeType = DOMNode.DOCUMENT_FRAGMENT_NODE;
};
DOMDocumentFragment.prototype = new DOMNode;
DOMDocumentFragment.prototype.toString = function DOMDocumentFragment_toString() {
	var xml = "";
	var _1ea9 = this.getChildNodes().getLength();
	for (intLoop = 0; intLoop < _1ea9; intLoop++) {
		xml += this.getChildNodes().item(intLoop).toString();
	}
	return xml;
};
DOMDocumentType = function() {
	alert("DOMDocumentType.constructor(): Not Implemented");
};
DOMEntity = function() {
	alert("DOMEntity.constructor(): Not Implemented");
};
DOMEntityReference = function() {
	alert("DOMEntityReference.constructor(): Not Implemented");
};
DOMNotation = function() {
	alert("DOMNotation.constructor(): Not Implemented");
};
Strings = new Object();
Strings.WHITESPACE = " \t\n\r";
Strings.QUOTES = "\"'";
Strings.isEmpty = function Strings_isEmpty(strD) {
	return (strD === null) || (strD.length === 0);
};
Strings.indexOfNonWhitespace = function Strings_indexOfNonWhitespace(strD, iB,
		iE) {
	if (Strings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	for ( var i = iB; i < iE; i++) {
		if (Strings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
			return i;
		}
	}
	return -1;
};
Strings.lastIndexOfNonWhitespace = function Strings_lastIndexOfNonWhitespace(
		strD, iB, iE) {
	if (Strings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	for ( var i = iE - 1; i >= iB; i--) {
		if (Strings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
			return i;
		}
	}
	return -1;
};
Strings.indexOfWhitespace = function Strings_indexOfWhitespace(strD, iB, iE) {
	if (Strings.isEmpty(strD)) {
		return -1;
	}
	iB = iB || 0;
	iE = iE || strD.length;
	for ( var i = iB; i < iE; i++) {
		if (Strings.WHITESPACE.indexOf(strD.charAt(i)) != -1) {
			return i;
		}
	}
	return -1;
};
Strings.replace = function Strings_replace(strD, iB, iE, strF, strR) {
	if (Strings.isEmpty(strD)) {
		return "";
	}
	iB = iB || 0;
	iE = iE || strD.length;
	return strD.substring(iB, iE).split(strF).join(strR);
};
Strings.getLineNumber = function Strings_getLineNumber(strD, iP) {
	if (Strings.isEmpty(strD)) {
		return -1;
	}
	iP = iP || strD.length;
	return strD.substring(0, iP).split("\n").length;
};
Strings.getColumnNumber = function Strings_getColumnNumber(strD, iP) {
	if (Strings.isEmpty(strD)) {
		return -1;
	}
	iP = iP || strD.length;
	var arrD = strD.substring(0, iP).split("\n");
	var _1ec1 = arrD[arrD.length - 1];
	arrD.length--;
	var _1ec2 = arrD.join("\n").length;
	return iP - _1ec2;
};
StringBuffer = function() {
	this._a = [];
};
StringBuffer.prototype.append = function StringBuffer_append(d) {
	this._a[this._a.length] = d;
};
StringBuffer.prototype.toString = function StringBuffer_toString() {
	return this._a.join("");
};
draw2d.XMLSerializer = function() {
	alert("do not init this class. Use the static methods instead");
};
draw2d.XMLSerializer.toXML = function(obj, _15bb, _15bc) {
	if (_15bb == undefined) {
		_15bb = "model";
	}
	_15bc = _15bc ? _15bc : "";
	var t = draw2d.XMLSerializer.getTypeName(obj);
	var s = _15bc + "<" + _15bb + " type=\"" + t + "\">";
	switch (t) {
	case "int":
	case "number":
	case "boolean":
		s += obj;
		break;
	case "string":
		s += draw2d.XMLSerializer.xmlEncode(obj);
		break;
	case "date":
		s += obj.toLocaleString();
		break;
	case "Array":
	case "array":
		s += "\n";
		var _15bf = _15bc + "   ";
		for ( var i = 0; i < obj.length; i++) {
			s += draw2d.XMLSerializer.toXML(obj[i], ("element"), _15bf);
		}
		s += _15bc;
		break;
	default:
		if (obj !== null) {
			s += "\n";
			if (obj instanceof draw2d.ArrayList) {
				obj.trimToSize();
			}
			var _15c1 = obj.getPersistentAttributes();
			var _15bf = _15bc + "   ";
			for ( var name in _15c1) {
				s += draw2d.XMLSerializer.toXML(_15c1[name], name, _15bf);
			}
			s += _15bc;
		}
		break;
	}
	s += "</" + _15bb + ">\n";
	return s;
};
draw2d.XMLSerializer.isSimpleVar = function(t) {
	switch (t) {
	case "int":
	case "string":
	case "String":
	case "Number":
	case "number":
	case "Boolean":
	case "boolean":
	case "bool":
	case "dateTime":
	case "Date":
	case "date":
	case "float":
		return true;
	}
	return false;
};
draw2d.XMLSerializer.getTypeName = function(obj) {
	if (obj === null) {
		return "undefined";
	}
	if (obj instanceof Array) {
		return "Array";
	}
	if (obj instanceof Date) {
		return "Date";
	}
	var t = typeof (obj);
	if (t == "number") {
		return (parseInt(obj).toString() == obj) ? "int" : "number";
	}
	if (draw2d.XMLSerializer.isSimpleVar(t)) {
		return t;
	}
	return obj.type.replace("@NAMESPACE" + "@", "");
};
draw2d.XMLSerializer.xmlEncode = function(_15c6) {
	var _15c7 = _15c6;
	var amp = /&/gi;
	var gt = />/gi;
	var lt = /</gi;
	var quot = /"/gi;
	var apos = /'/gi;
	var _15cd = "&#62;";
	var _15ce = "&#38;#60;";
	var _15cf = "&#38;#38;";
	var _15d0 = "&#34;";
	var _15d1 = "&#39;";
	_15c7 = _15c7.replace(amp, _15cf);
	_15c7 = _15c7.replace(quot, _15d0);
	_15c7 = _15c7.replace(lt, _15ce);
	_15c7 = _15c7.replace(gt, _15cd);
	_15c7 = _15c7.replace(apos, _15d1);
	return _15c7;
};
draw2d.XMLDeserializer = function() {
	alert("do not init this class. Use the static methods instead");
};
draw2d.XMLDeserializer.fromXML = function(node, _1fec) {
	var _1fed = "" + node.getAttributes().getNamedItem("type").getNodeValue();
	var value = node.getNodeValue();
	switch (_1fed) {
	case "int":
		try {
			return parseInt("" + node.getChildNodes().item(0).getNodeValue());
		} catch (e) {
			alert("Error:" + e + "\nDataType:" + _1fed + "\nXML Node:" + node);
		}
	case "string":
	case "String":
		try {
			if (node.getChildNodes().getLength() > 0) {
				return "" + node.getChildNodes().item(0).getNodeValue();
			}
			return "";
		} catch (e) {
			alert("Error:" + e + "\nDataType:" + _1fed + "\nXML Node:" + node);
		}
	case "Number":
	case "number":
		try {
			return parseFloat("" + node.getChildNodes().item(0).getNodeValue());
		} catch (e) {
			alert("Error:" + e + "\nDataType:" + _1fed + "\nXML Node:" + node);
		}
	case "Boolean":
	case "boolean":
	case "bool":
		try {
			return "true" == ("" + node.getChildNodes().item(0).getNodeValue())
					.toLowerCase();
		} catch (e) {
			alert("Error:" + e + "\nDataType:" + _1fed + "\nXML Node:" + node);
		}
	case "dateTime":
	case "Date":
	case "date":
		try {
			return new Date("" + node.getChildNodes().item(0).getNodeValue());
		} catch (e) {
			alert("Error:" + e + "\nDataType:" + _1fed + "\nXML Node:" + node);
		}
	case "float":
		try {
			return parseFloat("" + node.getChildNodes().item(0).getNodeValue());
		} catch (e) {
			alert("Error:" + e + "\nDataType:" + _1fed + "\nXML Node:" + node);
		}
		break;
	}
	_1fed = _1fed.replace("@NAMESPACE" + "@", "");
	var obj = eval("new " + _1fed + "()");
	if (_1fec != undefined && obj.setModelParent != undefined) {
		obj.setModelParent(_1fec);
	}
	var _1ff0 = node.getChildNodes();
	for ( var i = 0; i < _1ff0.length; i++) {
		var child = _1ff0.item(i);
		var _1ff3 = child.getNodeName();
		if (obj instanceof Array) {
			_1ff3 = i;
		}
		obj[_1ff3] = draw2d.XMLDeserializer.fromXML(child,
				obj instanceof draw2d.AbstractObjectModel ? obj : _1fec);
	}
	return obj;
};
draw2d.EditPolicy = function(_1cde) {
	this.policy = _1cde;
};
draw2d.EditPolicy.DELETE = "DELETE";
draw2d.EditPolicy.MOVE = "MOVE";
draw2d.EditPolicy.CONNECT = "CONNECT";
draw2d.EditPolicy.RESIZE = "RESIZE";
draw2d.EditPolicy.prototype.type = "draw2d.EditPolicy";
draw2d.EditPolicy.prototype.getPolicy = function() {
	return this.policy;
};
draw2d.AbstractPalettePart = function() {
	this.x = 0;
	this.y = 0;
	this.html = null;
};
draw2d.AbstractPalettePart.prototype.type = "draw2d.AbstractPalettePart";
draw2d.AbstractPalettePart.prototype = new draw2d.Draggable();
draw2d.AbstractPalettePart.prototype.createHTMLElement = function() {
	var item = document.createElement("div");
	item.id = this.id;
	item.style.position = "absolute";
	item.style.height = "24px";
	item.style.width = "24px";
	return item;
};
draw2d.AbstractPalettePart.prototype.setEnviroment = function(_2c83, _2c84) {
	this.palette = _2c84;
	this.workflow = _2c83;
};
draw2d.AbstractPalettePart.prototype.getHTMLElement = function() {
	if (this.html === null) {
		this.html = this.createHTMLElement();
		draw2d.Draggable.call(this, this.html);
	}
	return this.html;
};
draw2d.AbstractPalettePart.prototype.onDrop = function(_2c85, _2c86) {
	var _2c87 = this.workflow.getScrollLeft();
	var _2c88 = this.workflow.getScrollTop();
	var _2c89 = this.workflow.getAbsoluteX();
	var _2c8a = this.workflow.getAbsoluteY();
	this.setPosition(this.x, this.y);
	this.execute(_2c85 + _2c87 - _2c89, _2c86 + _2c88 - _2c8a);
};
draw2d.AbstractPalettePart.prototype.execute = function(x, y) {
	alert("inerited class should override the method 'draw2d.AbstractPalettePart.prototype.execute'");
};
draw2d.AbstractPalettePart.prototype.setTooltip = function(_2c8d) {
	this.tooltip = _2c8d;
	if (this.tooltip !== null) {
		this.html.title = this.tooltip;
	} else {
		this.html.title = "";
	}
};
draw2d.AbstractPalettePart.prototype.setDimension = function(w, h) {
	this.width = w;
	this.height = h;
	if (this.html === null) {
		return;
	}
	this.html.style.width = this.width + "px";
	this.html.style.height = this.height + "px";
};
draw2d.AbstractPalettePart.prototype.setPosition = function(xPos, yPos) {
	this.x = Math.max(0, xPos);
	this.y = Math.max(0, yPos);
	if (this.html === null) {
		return;
	}
	this.html.style.left = this.x + "px";
	this.html.style.top = this.y + "px";
	this.html.style.cursor = "move";
};
draw2d.AbstractPalettePart.prototype.getWidth = function() {
	return this.width;
};
draw2d.AbstractPalettePart.prototype.getHeight = function() {
	return this.height;
};
draw2d.AbstractPalettePart.prototype.getY = function() {
	return this.y;
};
draw2d.AbstractPalettePart.prototype.getX = function() {
	return this.x;
};
draw2d.AbstractPalettePart.prototype.getPosition = function() {
	return new draw2d.Point(this.x, this.y);
};
draw2d.AbstractPalettePart.prototype.disableTextSelection = function(e) {
	if (typeof e.onselectstart != "undefined") {
		e.onselectstart = function() {
			return false;
		};
	} else {
		if (typeof e.style.MozUserSelect != "undefined") {
			e.style.MozUserSelect = "none";
		}
	}
};
draw2d.ExternalPalette = function(_1a75, divId) {
	this.html = document.getElementById(divId);
	this.workflow = _1a75;
	this.parts = new draw2d.ArrayList();
};
draw2d.ExternalPalette.prototype.type = "draw2d.ExternalPalette";
draw2d.ExternalPalette.prototype.getHTMLElement = function() {
	return this.html;
};
draw2d.ExternalPalette.prototype.addPalettePart = function(part) {
	if (!(part instanceof draw2d.AbstractPalettePart)) {
		throw "parameter is not instanceof [draw2d.AbstractPalettePart]";
	}
	this.parts.add(part);
	this.html.appendChild(part.getHTMLElement());
	part.setEnviroment(this.workflow, this);
};

