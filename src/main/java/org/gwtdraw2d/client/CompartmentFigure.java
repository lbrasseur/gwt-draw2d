package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.CompartmentFigure.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class CompartmentFigure extends Node {
    public CompartmentFigure(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}
	public CompartmentFigure() {
		this.create();
	}
	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.CompartmentFigure();
    }-*/;
    
    public final native void addChild(final Figure figure) /*-{
        var jsThis = this.@org.gwtdraw2d.client.CompartmentFigure::getJsObj()();
        var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

        jsFigure.setWorkflow(jsThis.workflow);
        jsThis.addChild(jsFigure);
    }-*/;
    public final native void onFigureDrop(final Figure figure) /*-{
    var jsThis = this.@org.gwtdraw2d.client.CompartmentFigure::getJsObj()();
    var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

    jsFigure.setWorkflow(jsThis.workflow);
    jsThis.onFigureDrop(jsFigure);
}-*/;

    public final native void onFigureEnter(final Figure figure) /*-{
    var jsThis = this.@org.gwtdraw2d.client.CompartmentFigure::getJsObj()();
    var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

    jsFigure.setWorkflow(jsThis.workflow);
    jsThis.onFigureEnter(jsFigure);
}-*/;
    public final native void removeChild(final Figure figure) /*-{
    var jsThis = this.@org.gwtdraw2d.client.CompartmentFigure::getJsObj()();
    var jsFigure = figure.@org.gwtdraw2d.client.Figure::getJsObj()();

    jsFigure.setWorkflow(jsThis.workflow);
    jsThis.removeChild(jsFigure);
}-*/;
    
    public final native ArrayList getChildren() /*-{
    var jsThis = this.@org.gwtdraw2d.client.CompartmentFigure::getJsObj()();        
    var returnChildren = @org.gwtdraw2d.client.ArrayList::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getChildren());
    return returnChildren;
}-*/;
    
	
}
