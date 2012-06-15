package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Workflow.
 * @author lautaro.brasseur
 */
public class Workflow extends Canvas {
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
    public final native void addFigure(final Figure figure,
            final int x, final int y) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

        jsFigure.setWorkflow(jsThis.workflow);
        jsThis.addFigure(jsFigure, x, y);
    }-*/;

    
    /**
     * Adds a figure.
     * @param figure The figure
     * @param x The X coordinate
     * @param y The Y coordinate
     */
    public final native void addFigure(final Line line) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsLine = line.@org.gwtdraw2d.client.Line::getJsObj()();
        jsLine.setWorkflow(jsThis.workflow);
        jsThis.addFigure(jsLine);
    }-*/;
    
    /**
     * Returns the command stack.
     * @return The CommandStack
     */
    public final native CommandStack getCommandStack() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();

        var commandStack = @org.gwtdraw2d.client.CommandStack::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getCommandStack());

        return commandStack;
    }-*/;
}
