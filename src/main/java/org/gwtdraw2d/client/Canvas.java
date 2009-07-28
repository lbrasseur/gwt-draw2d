package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Canvas.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Canvas extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Canvas();
    }-*/;

    /**
     * @return The X coordinate in relation to the canvas
     */
    public final native int getAbsoluteX() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
        return jsThis.getAbsoluteX();
    }-*/;

    /**
     * @return The Y coordinate in relation to the canvas
     */
    public final native int getAbsoluteY() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
        return jsThis.getAbsoluteY();
    }-*/;
}
