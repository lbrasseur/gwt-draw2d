package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Figure.
 * @author lautaro.brasseur
 */
public class Figure extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Figure();
    }-*/;

    /**
     * Sets the workflow.
     * @param workflow The workflow
     */
    public final native void setWorkflow(final Workflow workflow) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        var jsWorkflow = workflow.@org.gwtdraw2d.client.Workflow::getJsObj()();

        jsThis.setWorkflow(jsWorkflow);
    }-*/;

    /**
     * Sets the figure dimension.
     * @param width The width
     * @param height The height
     */
    public final native void setDimension(final int width,
            final int height) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

        jsThis.setDimension(width, height);
    }-*/;
}
