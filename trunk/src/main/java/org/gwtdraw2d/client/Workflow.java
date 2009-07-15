package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Workflow.
 * @author lautaro.brasseur
 */
public class Workflow extends Component {
    /**
     * The id for the Workflow container.
     */
    private String containerId;

    /**
     * Constructor.
     * @param aContainerId The id for the Workflow container
     */
    public Workflow(final String aContainerId) {
        this.containerId = aContainerId;
    }

    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create() /*-{
        var containerId = this.@org.gwtdraw2d.client.Workflow::containerId;
        return new $wnd.draw2d.Workflow(containerId);
    }-*/;

    /**
     * Adds a figure.
     * @param figure The figure
     * @param x The X coordinate
     * @param y The Y coordinate
     */
    public final void addFigure(final Figure figure, final int x, final int y) {
        figure.setWorkflow(this);
        invoke("addFigure", figure.getJsObj(), x, y);
    }
}