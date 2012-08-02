package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Menu.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Menu extends Figure {
	
	public Menu(){
		this.create();
	}
	
    public Menu(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Menu();
    }-*/;

    /**
     * Appends a menu item to this menu and enforce a repaint of the menu.
     * @param item The item
     */
    public final native void appendMenuItem(final MenuItem item) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Menu::getJsObj()();
        var jsItem = item.@org.gwtdraw2d.client.MenuItem::getJsObj()();

        jsThis.appendMenuItem(jsItem);
    }-*/;
    
    public final native void createList() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Menu::getJsObj()();	
	    jsThis.createList();
	}-*/;
    
}
