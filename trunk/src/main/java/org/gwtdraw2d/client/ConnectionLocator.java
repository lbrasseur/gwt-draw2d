package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ConnectionLocator.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class ConnectionLocator extends Locator {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.ConnectionLocator();
    }-*/;
}
