package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Dimension.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Dimension extends Point {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Dimension();
    }-*/;
}
