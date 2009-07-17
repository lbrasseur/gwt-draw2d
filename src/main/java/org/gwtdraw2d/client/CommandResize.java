package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.CommandResize.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class CommandResize extends Command {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.CommandResize();
    }-*/;
}
