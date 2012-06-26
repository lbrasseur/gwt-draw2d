package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Rectangle.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Rectangle extends Figure {
	public Rectangle() {
		super();
	}
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Rectangle();
    }-*/;
    /**
     * Constructor passing JavaScriptObject.
     * @param aJsObj the JavaScriptObject
     */
    public Rectangle(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }
    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public native void setBackgroundColor(final Color color) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Rectangle::getJsObj()();
        var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();

        jsThis.setBackgroundColor(jsColor);
    }-*/;
}
