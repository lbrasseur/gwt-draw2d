package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.event.dom.client.HasDoubleClickHandlers;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.Widget;

/**
 * Base class for all Draw2d wrapper components.
 * @author lautaro.brasseur
 */
public abstract class Component extends Widget implements HasDoubleClickHandlers  {
    /**
     * The JavaScriptObject to be wrapped.
     */
    private JavaScriptObject jsObj;

    static {
        initClass();
    }

    /**
     * Class initialization method.
     */
    private static native void initClass() /*-{
        var gwtdraw2d = new Object();
        var idMap = new Array();

        $wnd.gwtdraw2d = gwtdraw2d;
        $wnd.gwtdraw2d.idMap = idMap;
    }-*/;

    /**
     * Default constructor.
     */
    protected Component() {
    }

    /**
     * Constructor passing JavaScriptObject.
     * @param aJsObj the JavaScriptObject
     */
    protected Component(final JavaScriptObject aJsObj) {
        this.jsObj = aJsObj;
        initComponent();
    }

    /**
     * Gets the wrapperd JavaScriptObject. If it is null, it is created.
     * @return The JavaScriptObject
     */
    protected final JavaScriptObject getJsObj() {
        if (jsObj == null) {
            jsObj = create();
            initComponent();
        }
        return jsObj;
    }

    /**
     * Abstract method for creating the wrapped JavaScriptObject.
     * @return The JavaScriptObject
     */
    protected abstract JavaScriptObject create();

    /**
     * Component initialization method.
     */
    private native void initComponent() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Component::getJsObj()();
        if (jsThis.id) {
            $wnd.gwtdraw2d.idMap[jsThis.id] = this;
        }
    }-*/;

    /**
     * Lookups for a component with a given JavaScriptObject ID.
     * @param jsObjId The ID of the JavaScriptObject
     * @return The component
     */
    protected static final native Component getComponent(
            final String jsObjId) /*-{
        return $wnd.gwtdraw2d.idMap[jsObjId];
    }-*/;
    
    /**
     * get the id of the component
     * @return
     */
	public final native String getId()/*-{
	var jsThis = this.@org.gwtdraw2d.client.RoundCornerFigure::getJsObj()();
	return jsThis.id;
	}-*/;
    
    /**
     * Sets the menu builder.
     * @param target The target JavaScriptObject
     * @param menuBuilder The menu builder
     */
    protected final native void setMenuBuilder(final JavaScriptObject target,
            final MenuBuilder menuBuilder) /*-{
           target.getContextMenu = function() {
               var menu = menuBuilder.@org.gwtdraw2d.client.MenuBuilder::buildMenu()();
               var jsMenu = menu.@org.gwtdraw2d.client.Menu::getJsObj()();
               return jsMenu;
           }
       }-*/;      
    
	public static native void exportDoubleClickMethod() /*-{
	   $wnd.fireDoubleClick = function(id) {
	        	@org.gwtdraw2d.client.Component::fireDoubleClick(Ljava/lang/String;)(id);
	    	}   
	}-*/;
    
    public static void fireDoubleClick(String id) {
    	Component component = (Component)Window.getComponent(id);
    	component.fireEvent(new DoubleClickEvent(){ } );
	}
    
	@Override
	public HandlerRegistration addDoubleClickHandler(DoubleClickHandler handler) {
		this.exportDoubleClickMethod();
		return addDomHandler(handler, DoubleClickEvent.getType());
	}
    
    
    
}
