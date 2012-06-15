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
    
    public Port(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }
        /**
     * Sets the background color.
     * @param color The color to be set
     */
    public final native void setBackgroundColor(final Color color) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Port::getJsObj()();
        var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();

        jsThis.setBackgroundColor(jsColor);
    }-*/;
    


    /**
     * Removes all the listeners.
     */
    public final native void removeListeners() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Port::getJsObj()();
        jsThis.onDrop = null;
    }-*/;

    /**
     * Adds a port listener.
     * @param portListener The port listener
     */
    public final native void addListener(final PortListener portListener) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Port::getJsObj()();
        var thisPort = this;

        var oldOnDrop = jsThis.onDrop;

        jsThis.onDrop = function(port) {
            if (oldOnDrop) {
                oldOnDrop.call(jsThis, port);
            }
            var portComponent = @org.gwtdraw2d.client.Component::getComponent(Ljava/lang/String;)(port.id);

            portListener.@org.gwtdraw2d.client.PortListener::onDrop(Lorg/gwtdraw2d/client/Port;Lorg/gwtdraw2d/client/Port;)(thisPort,portComponent);
        }
    }-*/;
}
