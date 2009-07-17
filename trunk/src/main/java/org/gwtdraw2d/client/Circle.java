package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Circle.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Circle extends Oval {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Circle();
    }-*/;
}
