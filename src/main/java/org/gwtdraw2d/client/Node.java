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
    public final native void addPort(final Port port,
            final int x, final int y) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsPort = port.@org.gwtdraw2d.client.Port::getJsObj()();

        jsPort.setWorkflow(jsThis.workflow);
        jsThis.addPort(jsPort, x, y);
    }-*/;
}
