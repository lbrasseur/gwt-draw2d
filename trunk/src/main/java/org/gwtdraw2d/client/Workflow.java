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

	public Workflow() {
		super();
	}
    public Workflow(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }
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
    
    public final native JavaScriptObject clear() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        jsThis.clear();
    }-*/;
    
    protected final native Menu getContextMenu() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
		return jsThis.getContextMenu();
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
     * Removes a figure from the canvas
     * @param figure
     */
    public final native void removeFigure(final Figure figure) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

        jsFigure.setWorkflow(jsThis.workflow);
        jsThis.removeFigure(jsFigure);
    }-*/;
    /**
     * Removes a figure from the canvas
     * @param figure
     */
    public final native void removeFigure(final Line line) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsLine = line.@org.gwtdraw2d.client.Line::getJsObj()();
        jsLine.setWorkflow(jsThis.workflow);
        jsThis.removeFigure(jsLine);
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
    
    public final native void showTooltip(final Figure figure, final Boolean autoHide) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();
        jsFigure.setWorkflow(jsThis.workflow);
    	jsThis.showTooltip(jsFigure, autoHide);
	}-*/;
    
    public final native Boolean getFloatEnabled() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
		return jsThis.getFloatEnabled();
	}-*/;
    
    public final native Boolean setFloatEnabled(final Boolean enableFloat) /*-{
	var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
	return jsThis.setFloatEnabled(enableFloat);
}-*/;


    public final native Figure getCurrentSelection() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();
        var figure = @org.gwtdraw2d.client.Figure::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getCurrentSelection());
        return figure;
    }-*/;
    
    public final native void moveBack(final Figure figure,
            final int x, final int y) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();
        var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

        jsFigure.setWorkflow(jsThis.workflow);
        jsThis.moveBack(jsFigure);
    }-*/;
    
    public final native void moveFront(final Figure figure,
            final int x, final int y) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();
        var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

        jsFigure.setWorkflow(jsThis.workflow);
        jsThis.moveFront(jsFigure);
    }-*/;
    
    public final native void setSnapToGrid( final Boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();    
		jsThis.setSnapToGrid(flag);
	}-*/;
    
    public final native void setSnapToGeometry( final Boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();    
		jsThis.setSnapToGeometry(flag);
	}-*/;
    public final native void setGridWidth(final int x, final int y) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();
        jsThis.setGridWidth( x, y);
    }-*/;
    public final native void scrollTo(final int x, final int y, final Boolean fast) /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Workflow::getJsObj()();
	    jsThis.scrollTo( x, y, fast);
	}-*/;
}
