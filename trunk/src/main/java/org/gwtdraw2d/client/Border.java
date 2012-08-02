package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Border.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Border extends Component {	
	public Border() {
		super();
	} 
	
	public Border(final JavaScriptObject aJsObj) {
	    super(aJsObj);
	}
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Border();
    }-*/;
    
    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public native void setColor(final Color color) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();

        jsThis.setColor(jsColor);
    }-*/;

    
    /**
     * Gets the background color.
     */
    public native Color getColor(final Color color) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

        return jsThis.getColor();
    }-*/;
}
