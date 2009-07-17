package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Port.
 * @author lautaro.brasseur
 */
public class Port extends Rectangle {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.Port();
    }-*/;

    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public final void setBackgroundColor(final Color color) {
        invoke("setBackgroundColor", color.getJsObj());
    }

    /**
     * Adds a port listener.
     * @param portListener The port listener
     */
    public final void addListener(final PortListener portListener) {
        addListener(getJsObj(), portListener);
    }

    /**
     * Adds a port listener.
     * @param portListener The port listener
     */
    public final native void addListener(JavaScriptObject target, PortListener portListener)/*-{
        target.onDrop = function(port) {
            alert(123);
            //portListener.@org.gwtdraw2d.client.PortListener::onDrop(Lorg/gwtdraw2d/client/Port)(null);
        }
    }-*/;
}
