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
