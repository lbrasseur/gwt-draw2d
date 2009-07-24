package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.CommandConnect.
 * @author lautaro.brasseur TODO: Start coding the wrapper!.
 */
public class CommandConnect extends Command {
    /**
     * The workflow.
     */
    private Workflow canvas;
    /**
     * The source port.
     */
    private Port source;
    /**
     * The target port.
     */
    private Port target;

    /**
     * Constructor.
     * @param aCanvas The workflow
     * @param aSource The source port
     * @param aTarget The target port
     */
    public CommandConnect(final Workflow aCanvas, final Port aSource,
            final Port aTarget) {
        this.canvas = aCanvas;
        this.source = aSource;
        this.target = aTarget;
    }

    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create() /*-{
        var canvas = this.@org.gwtdraw2d.client.CommandConnect::canvas;
        var source = this.@org.gwtdraw2d.client.CommandConnect::source;
        var target = this.@org.gwtdraw2d.client.CommandConnect::target;

        var jsCanvas = canvas.@org.gwtdraw2d.client.Workflow::getJsObj()();
        var jsSource = source.@org.gwtdraw2d.client.Port::getJsObj()();
        var jsTarget = target.@org.gwtdraw2d.client.Port::getJsObj()();

        return new $wnd.draw2d.CommandConnect(jsCanvas, jsSource, jsTarget);
    }-*/;

    /**
     * Sets the connection.
     * @param connection the connection
     */
    public final native void setConnection(final Connection connection) /*-{
        var jsThis = this.@org.gwtdraw2d.client.CommandConnect::getJsObj()();
        var jsConnection = connection.@org.gwtdraw2d.client.Connection::getJsObj()();

        jsThis.setConnection(jsConnection);
    }-*/;
}
