package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Node.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Node extends Figure {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Node();
    }-*/;


    /**
     * Adds a port.
     * @param port The port
     * @param x The X coordinate
     * @param y The Y coordinate
     */
    public final void addPort(final Port port, final int x, final int y) {
        invoke(port.getJsObj(), "setWorkflow", invoke("getWorkflow"));
        invoke("addPort", port.getJsObj(), x, y);
    }
}
