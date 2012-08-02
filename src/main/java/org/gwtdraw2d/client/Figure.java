package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Figure.
 * 
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
	 * Constructor passing JavaScriptObject.
	 * 
	 * @param aJsObj
	 *            the JavaScriptObject
	 */
	public Figure(final JavaScriptObject aJsObj) {
		super(aJsObj);
	}

	public Figure() {
		this.create();
	}
    public final native Workflow getWorkflow() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
	    var workflow = @org.gwtdraw2d.client.Workflow::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getWorkflow());
	    return workflow;
	}-*/;
    public final native Point getSnapToGridAnchor() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
	    var point = @org.gwtdraw2d.client.Point::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getSnapToGridAnchor());
	    return point;
	}-*/;

	/**
	 * Sets the workflow.
	 * 
	 * @param workflow
	 *            The workflow
	 */
	public final native void setWorkflow(final Workflow workflow) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		var jsWorkflow = workflow.@org.gwtdraw2d.client.Workflow::getJsObj()();

		jsThis.setWorkflow(jsWorkflow);
	}-*/;

	/**
	 * Sets the figure dimension.
	 * 
	 * @param width
	 *            The width
	 * @param height
	 *            The height
	 */
	public final native void setDimension(final int width, final int height) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		jsThis.setDimension(width, height);
	}-*/;
	public final native void setToolTip(final String tipText) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		jsThis.setToolTip(tipText);
	}-*/;
	
	
	public final native void onDoubleClick() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		jsThis.onDoubleClick();
	}-*/;

	public final native void onDragstart() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		
		jsThis.onDragstart();
	}-*/;

	public final native void onKeyDown() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		jsThis.onKeyDown();
	}-*/;

	public final native void onMouseEnter() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		jsThis.onMouseEnter();
	}-*/;

	public final native void onMouseLeave() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		jsThis.onMouseLeave();
	}-*/;

	public final native void onRemove() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		jsThis.onRemove();
	}-*/;

	public final native int getAbsoluteX() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getAbsoluteX();
	}-*/;

	public final native int getAbsoluteY() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getAbsoluteY();
	}-*/;

    public final native void setZOrderBaseIndex(final int index) /*-{
    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        
    jsThis.setZOrderBaseIndex(index);
}-*/;
    public final native void setZOrder(final int index) /*-{
    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        
    jsThis.setZOrder(index);
}-*/;
	public final native int getX() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getX();
	}-*/;

	public final native int getY() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getY();
	}-*/;

	public final native int getWidth() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getWidth();
	}-*/;

	public final native int getHeight() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getHeight();
	}-*/;

	public final native int getZOrder() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getZOrder();
	}-*/;
	
	public final native String getId() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

		return jsThis.getId();
	}-*/;
	public final native String setId(final String id) /*-{
	var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

	return jsThis.setId(id);
}-*/;
    public final native boolean isOver(final int x, final int y)/*-{
    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
    return jsThis.isOver(x,y);
	}-*/;
    public final native boolean hasFixedPosition() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		return jsThis.hasFixedPosition();
	}-*/;
    public final native boolean isDeleteable() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		return jsThis.isDeleteable();
	}-*/;
    public final native boolean isSelectable() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		return jsThis.isSelectable();
	}-*/;
    public final native boolean isResizeable() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		return jsThis.isResizeable();
	}-*/; 
    public final native boolean isStrechable() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
		return jsThis.isStrechable();
	}-*/;     
    public final native void setResizeable( final boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setResizeable(flag);
	}-*/;
    public final native void setSelectable( final boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setSelectable(flag);
	}-*/;
    public final native void setCanDrag( final boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setCanDrag(flag);
	}-*/;
    public final native void setCanSnapToHelper( final boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setCanSnapToHelper(flag);
	}-*/;
    public final native void setDeleteable( final boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setDeleteable(flag);
	}-*/;
    
    public final native void setProperty( final String property, final String value) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setProperty(property, value);
	}-*/;
    public final native void setPosition( final int xPos, final int yPos) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();    
		jsThis.setPosition(xPos, yPos);
		
	}-*/;   
    public final native void setSnapToGridAnchor(final Point point) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        var jsPoint = point.@org.gwtdraw2d.client.Point::getJsObj()();

        jsPoint.setWorkflow(jsThis.workflow);
        jsThis.setSnapToGridAnchor(jsPoint);
    }-*/;   
    public final native void setBorder(final Border border) /*-{
    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
    var jsBorder = border.@org.gwtdraw2d.client.Border::getJsObj()();

    jsBorder.setWorkflow(jsThis.workflow);
    jsThis.setBorder(jsBorder);
}-*/;  
    public final native void setAlpha(final float percent) /*-{
    var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
    jsThis.setAlpha(percent);
}-*/;  
	/**
	 * Sets the menu builder.
	 * 
	 * @param menuBuilder
	 *            The menu builder
	 */
	public final void setMenuBuilder(final MenuBuilder menuBuilder) {
		setMenuBuilder(getJsObj(), menuBuilder);
	}
}
