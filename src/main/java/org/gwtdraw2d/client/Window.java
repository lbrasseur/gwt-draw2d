package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Window.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Window extends Figure {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Window();
    }-*/;
}
