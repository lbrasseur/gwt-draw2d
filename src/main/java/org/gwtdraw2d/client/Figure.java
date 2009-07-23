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
    public final void setWorkflow(final Workflow workflow) {
        invoke("setWorkflow", workflow.getJsObj());
    };

    /**
     * Sets the figure dimension.
     * @param width The width
     * @param height The height
     */
    public final void setDimension(final int width, final int height) {
        invoke("draw2d.Figure.prototype.setDimension", width, height);
    }
}
